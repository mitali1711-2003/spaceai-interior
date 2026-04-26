import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const saveSchema = z.object({
  furnitureId: z
    .number({ error: "furnitureId is required" })
    .int()
    .positive("furnitureId must be a positive integer"),
  name: z.string({ error: "name is required" }).min(1),
  category: z.string({ error: "category is required" }).min(1),
  price: z.string({ error: "price is required" }).min(1),
  imageUrl: z.string({ error: "imageUrl is required" }).min(1),
});

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const saved = await prisma.savedFurniture.findMany({
    where: { userId: user.id },
    orderBy: { savedAt: "desc" },
  });

  return apiSuccess({ saved });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return apiError("Invalid JSON in request body", 400);
  }

  const parsed = saveSchema.safeParse(body);
  if (!parsed.success) return apiError(parsed.error.issues[0].message, 422);

  const saved = await prisma.savedFurniture.upsert({
    where: {
      userId_furnitureId: { userId: user.id, furnitureId: parsed.data.furnitureId },
    },
    create: { userId: user.id, ...parsed.data },
    update: {},
  });

  return apiSuccess({ saved }, 201);
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return apiError("Unauthorized", 401);

  const furnitureId = Number(new URL(req.url).searchParams.get("id"));
  if (!furnitureId || !Number.isInteger(furnitureId) || furnitureId <= 0) {
    return apiError("Valid furnitureId query param is required", 422);
  }

  await prisma.savedFurniture.deleteMany({
    where: { userId: user.id, furnitureId },
  });

  return apiSuccess({ message: "Removed from saved" });
}
