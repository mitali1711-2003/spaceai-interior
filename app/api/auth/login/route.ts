import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signToken, setAuthCookie } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 422);
    }

    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return apiError("Invalid email or password", 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return apiError("Invalid email or password", 401);
    }

    // Downgrade plan if trial has expired
    if (user.trialEndsAt && new Date() > user.trialEndsAt && user.plan === "pro") {
      await prisma.user.update({
        where: { id: user.id },
        data: { plan: "free" },
      });
    }

    const token = signToken({ userId: user.id, email: user.email });
    await setAuthCookie(token);

    return apiSuccess({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: user.plan,
        trialEndsAt: user.trialEndsAt,
      },
      token,
    });
  } catch (err) {
    console.error("[login]", err);
    return apiError("Something went wrong. Please try again.", 500);
  }
}
