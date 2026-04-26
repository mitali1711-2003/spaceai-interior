import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your SpaceAI account and start designing your dream space.",
};

export default function LoginPage() {
  return <LoginForm />;
}
