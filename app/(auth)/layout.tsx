// Auth pages have their own full-screen layout — no shared Navbar or Footer
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
