import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const updateSchema = z.object({
  name: z.string().min(2).optional(),
});

// GET /api/user — get current user profile
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const stats = await prisma.$transaction([
    prisma.room.count({ where: { userId: user.id } }),
    prisma.savedFurniture.count({ where: { userId: user.id } }),
    prisma.design.count({ where: { userId: user.id } }),
  ]);

  const trialDaysLeft =
    user.trialEndsAt
      ? Math.max(0, Math.ceil((user.trialEndsAt.getTime() - Date.now()) / 86400000))
      : null;

  return apiSuccess({
    user: {
      ...user,
      trialDaysLeft,
    },
    stats: {
      rooms: stats[0],
      savedFurniture: stats[1],
      designs: stats[2],
    },
  });
}

// PATCH /api/user — update profile
export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: parsed.data,
    select: { id: true, name: true, email: true, plan: true, trialEndsAt: true, updatedAt: true },
  });

  return apiSuccess({ user: updated });
}
