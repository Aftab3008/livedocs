import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
}
