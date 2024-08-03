import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
}
