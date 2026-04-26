import type { Metadata } from "next";
import { SignupForm } from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up — 14 Days Free",
  description: "Create your free SpaceAI account. Get 14 days of Pro access free — no credit card needed.",
};

export default function SignupPage() {
  return <SignupForm />;
}
