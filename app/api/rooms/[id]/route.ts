import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const updateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  style: z.string().max(60).optional(),
  description: z.string().max(500).optional(),
  // imageUrl accepts any non-empty string (relative or absolute)
  imageUrl: z.string().min(1).optional(),
});

async function ownedRoom(id: string, userId: string) {
  return prisma.room.findFirst({ where: { id, userId } });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const { id } = await params;
  const room = await ownedRoom(id, user.id);
  if (!room) return apiError("Room not found", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return apiError("Invalid JSON in request body", 400);
  }

  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  // Reject empty update
  if (Object.keys(parsed.data).length === 0) {
    return apiError("No fields provided to update", 422);
  }

  const updated = await prisma.room.update({
    where: { id },
    data: parsed.data,
  });

  return apiSuccess({ room: updated });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const { id } = await params;
  const room = await ownedRoom(id, user.id);
  if (!room) return apiError("Room not found", 404);

  await prisma.room.delete({ where: { id } });
  return apiSuccess({ message: "Room deleted" });
}
