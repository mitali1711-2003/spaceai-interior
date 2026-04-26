import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const saveSchema = z.object({
  furnitureId: z.number(),
  name: z.string(),
  category: z.string(),
  price: z.string(),
  imageUrl: z.string(),
});

// GET /api/saved-furniture — list user's saved items
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const saved = await prisma.savedFurniture.findMany({
    where: { userId: user.id },
    orderBy: { savedAt: "desc" },
  });

  return apiSuccess({ saved });
}

// POST /api/saved-furniture — save an item
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const body = await req.json();
  const parsed = saveSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  const saved = await prisma.savedFurniture.upsert({
    where: { userId_furnitureId: { userId: user.id, furnitureId: parsed.data.furnitureId } },
    create: { userId: user.id, ...parsed.data },
    update: {},
  });

  return apiSuccess({ saved }, 201);
}

// DELETE /api/saved-furniture?id=furnitureId — unsave an item
export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const furnitureId = Number(new URL(req.url).searchParams.get("id"));
  if (!furnitureId) return apiError("furnitureId is required", 422);

  await prisma.savedFurniture.deleteMany({
    where: { userId: user.id, furnitureId },
  });

  return apiSuccess({ message: "Removed from saved" });
}
