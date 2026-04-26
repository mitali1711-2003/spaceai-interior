import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signToken, setAuthCookie } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const schema = z.object({
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ error: "Password is required" })
    .min(1, "Password is required"),
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

    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { email } });
    // Use constant-time comparison even on missing user to prevent timing attacks
    const dummyHash = "$2b$12$invalidhashforthisplaceholderonly";
    const passwordMatch = user
      ? await bcrypt.compare(password, user.password)
      : await bcrypt.compare(password, dummyHash).then(() => false);

    if (!user || !passwordMatch) {
      return apiError("Invalid email or password", 401);
    }

    // Downgrade plan if trial has expired
    let currentPlan = user.plan;
    if (user.trialEndsAt && new Date() > user.trialEndsAt && user.plan === "pro") {
      await prisma.user.update({ where: { id: user.id }, data: { plan: "free" } });
      currentPlan = "free";
    }

    const token = signToken({ userId: user.id, email: user.email });
    await setAuthCookie(token);

    return apiSuccess({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: currentPlan,
        trialEndsAt: user.trialEndsAt,
      },
    });
  } catch (err) {
    console.error("[login]", err);
    return apiError("Something went wrong. Please try again.", 500);
  }
}
