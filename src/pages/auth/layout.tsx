import { AuthHeader } from "@/components/features/auth/auth-header";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/components/context/use-auth";

// Decorative culinary photograph shown alongside the authentication form.
// Remote URLs are the project's existing convention for recipe imagery.
const authPanelImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80";

export default function AuthLayout() {
  const { user, ready } = useAuth();

  if (ready && user) return <Navigate to={user.role === "ADMIN" ? "/admin" : "/user"} replace />;
  return (
    <main className="flex min-h-svh items-center justify-center bg-[radial-gradient(ellipse_at_top,_#e6d8c4,_#f6f0e5_62%)] px-4 py-10 md:px-6 md:py-12 lg:px-8">
      {/* One rounded panel holds the image and form: stacked on phones, a narrow
          image rail on tablets, and a balanced split from desktop up. */}
      <div className="grid w-full max-w-md animate-rise overflow-hidden rounded-xl border border-line bg-paper shadow-lift md:max-w-3xl md:grid-cols-[240px_1fr] lg:max-w-5xl lg:grid-cols-2">
        {/* Decorative image keeps the form the focus on small screens. */}
        <div className="group relative hidden overflow-hidden bg-wine md:block" aria-hidden="true">
          <img
            src={authPanelImage}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/75 via-wine/15 to-transparent" />
        </div>

        {/* Form panel */}
        <div className="flex flex-col justify-center px-6 py-10 md:px-8 md:py-12 lg:px-10">
          <AuthHeader />
          {ready && <Outlet />}
        </div>
      </div>
    </main>
  );
}
