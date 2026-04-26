import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const createSchema = z.object({
  name: z
    .string({ error: "Room name is required" })
    .min(1, "Room name is required")
    .max(100, "Room name is too long"),
  style: z.string().max(60).optional().default("Modern"),
  description: z.string().max(500).optional(),
});

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const rooms = await prisma.room.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      designs: {
        select: { id: true, styleName: true, status: true, createdAt: true },
      },
    },
  });

  return apiSuccess({ rooms });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  // Free plan: max 3 rooms per month
  if (user.plan === "free") {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const count = await prisma.room.count({
      where: { userId: user.id, createdAt: { gte: startOfMonth } },
    });

    if (count >= 3) {
      return apiError(
        "Free plan allows 3 rooms per month. Upgrade to Pro for unlimited rooms.",
        403
      );
    }
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return apiError("Invalid JSON in request body", 400);
  }

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  const room = await prisma.room.create({
    data: {
      userId: user.id,
      name: parsed.data.name,
      style: parsed.data.style,
      description: parsed.data.description,
    },
  });

  return apiSuccess({ room }, 201);
}
