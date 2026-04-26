import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const updateSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long")
    .optional(),
});

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const [roomCount, savedCount, designCount] = await prisma.$transaction([
    prisma.room.count({ where: { userId: user.id } }),
    prisma.savedFurniture.count({ where: { userId: user.id } }),
    prisma.design.count({ where: { userId: user.id } }),
  ]);

  const trialDaysLeft =
    user.trialEndsAt
      ? Math.max(0, Math.ceil((user.trialEndsAt.getTime() - Date.now()) / 86_400_000))
      : null;

  return apiSuccess({
    user: { ...user, trialDaysLeft },
    stats: { rooms: roomCount, savedFurniture: savedCount, designs: designCount },
  });
}

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return apiError("Invalid JSON in request body", 400);
  }

  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  if (!parsed.data.name) return apiError("No fields provided to update", 422);

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { name: parsed.data.name },
    select: {
      id: true,
      name: true,
      email: true,
      plan: true,
      trialEndsAt: true,
      updatedAt: true,
    },
  });

  return apiSuccess({ user: updated });
}
