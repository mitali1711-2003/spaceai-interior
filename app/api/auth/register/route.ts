import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signToken, setAuthCookie } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const schema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
});

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return apiError("Invalid JSON in request body", 400);
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 422);
    }

    const { name, email, password } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return apiError("An account with this email already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const trialEndsAt = new Date();
    trialEndsAt.setDate(trialEndsAt.getDate() + 14);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        plan: "pro",
        trialEndsAt,
      },
      select: {
        id: true,
        email: true,
        name: true,
        plan: true,
        trialEndsAt: true,
        createdAt: true,
      },
    });

    const token = signToken({ userId: user.id, email: user.email });
    await setAuthCookie(token);

    // Never return the raw token — session is cookie-based
    return apiSuccess({ user }, 201);
  } catch (err) {
    console.error("[register]", err);
    return apiError("Something went wrong. Please try again.", 500);
  }
}
