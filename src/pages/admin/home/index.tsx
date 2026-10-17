import { useState } from "react";
import { useAuth } from "@/components/context/use-auth";
import { PageHeader } from "@/components/common/page-header";
import { AdminRecipes } from "@/components/features/admin/admin-recipes";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const { user, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    try {
      setError("");
      await logout();
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  return (
    <Section>
      <PageHeader eyebrow="Recipe Book · Administration" title="All recipes" description="Browse recipes across every account.">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm text-ivory/90">{user?.name}</span>
          <Button variant="secondary" onClick={handleLogout}>Sign out</Button>
        </div>
      </PageHeader>

      {error && <p role="alert" className="mb-6 text-rose-700">{error}</p>}

      <AdminRecipes />
    </Section>
  );
}
