import { AuthHeader } from "@/components/features/auth/auth-header";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/components/context/use-auth";

export default function AuthLayout() {
  const { user, ready } = useAuth();

  if (ready && user) return <Navigate to={user.role === "ADMIN" ? "/admin" : "/user"} replace />;
  return (
    <main className="flex min-h-svh items-center justify-center bg-[radial-gradient(ellipse_at_top,_#e6d8c4,_#f6f0e5_62%)] px-4 py-12">
      <div className="w-full max-w-md">
        <AuthHeader />
        {ready && <Outlet />}
      </div>
    </main>
  );
}