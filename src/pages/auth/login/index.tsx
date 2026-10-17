import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <Card className="border-0 bg-transparent p-0 shadow-none">
      {/* The page owns its presentation; the feature handles form state and submission. */}
      <AuthFormHeader title="Welcome back" description="Sign in to find your next favorite meal." />

      <LoginForm />

      <Link className="mt-6 block border-t border-line pt-6 text-center text-sm font-medium text-burgundy underline underline-offset-4 transition-colors duration-200 hover:text-claret" to={"/auth/signup"}>
        New here? Create an account
      </Link>
    </Card>
  );
}
