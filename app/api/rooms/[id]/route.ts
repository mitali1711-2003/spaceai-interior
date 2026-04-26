import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const updateSchema = z.object({
  name: z.string().min(1).optional(),
  style: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

async function getRoom(id: string, userId: string) {
  return prisma.room.findFirst({ where: { id, userId } });
}

// GET /api/rooms/[id]
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const { id } = await params;
  const room = await prisma.room.findFirst({
    where: { id, userId: user.id },
    include: { designs: true },
  });

  if (!room) return apiError("Room not found", 404);
  return apiSuccess({ room });
}

// PATCH /api/rooms/[id]
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const { id } = await params;
  const room = await getRoom(id, user.id);
  if (!room) return apiError("Room not found", 404);

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  const updated = await prisma.room.update({
    where: { id },
    data: parsed.data,
  });

  return apiSuccess({ room: updated });
}

// DELETE /api/rooms/[id]
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const { id } = await params;
  const room = await getRoom(id, user.id);
  if (!room) return apiError("Room not found", 404);

  await prisma.room.delete({ where: { id } });
  return apiSuccess({ message: "Room deleted" });
}
