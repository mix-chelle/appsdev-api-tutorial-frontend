import { useEffect, useState } from "react";
import { useAuth } from "@/components/context/use-auth";
import { deleteRecipeService, getRecipesService, type Recipe } from "@/services/recipe-service";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/features/recipe/recipe-card";
import AddRecipeForm from "@/components/features/recipe/add-recipe-form";
import { Navigate } from "react-router";

export function RecipeCollection() {
  const { user, ready } = useAuth();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(function fetchRecipes() {
    if (!ready || !user) {
      return;
    }

    let active = true;

    async function loadRecipes() {
      try {
        const result = await getRecipesService();
        if (active) {
          setRecipes(result);
          setError("");
        }
      } catch {
        if (active) {
          setError("Unable to load recipes. Please try again.");
        }
      }
    }

    loadRecipes();

    // Ignore a response if the account changes or this feature is removed.
    function cleanup() {
      active = false;
    }

    return cleanup;
  }, [ready, user]);
  async function handleDelete(id: string) {
    if (!confirm("Do you want to delete this recipe?")) return;
    try {
      await deleteRecipeService(id);
      setRecipes((current) => current.filter((recipe) => recipe.id !== id));
    } catch {
      setError("Unable to delete this recipe. Please try again.");
    }
  };

  if (!ready) return null;

  if (!user) return <Navigate to="/auth/login" replace />;

  function openForm() {
    setOpen(true);
  }

  function closeForm() {
    setOpen(false);
  }

  function handleCreated(newRecipe: Recipe) {
    setRecipes(function addRecipe(currentRecipes) {
      return [newRecipe, ...currentRecipes];
    });
    closeForm();
  }

  // The page supplies the header; this feature owns the collection and its dialog.
  return (
    <><>
        {/* Collection heading and primary action wrap on narrow screens. */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div><h2 className="text-2xl font-semibold tracking-tight text-ink">Your recipes</h2><p className="mt-1 text-sm text-muted">{recipes.length} saved {recipes.length === 1 ? "recipe" : "recipes"} to inspire your next meal</p></div>
          <Button onClick={openForm}>Add Recipe</Button>
        </div>
        {error && <p role="alert" className="mb-4 text-sm text-red-600">{error}</p>}
        {recipes.length === 0 ? <div className="rounded-xl border border-dashed border-line bg-paper px-6 py-16 text-center"><h3 className="text-2xl font-semibold text-ink">A fresh page for your favorites</h3><p className="mt-2 text-sm text-muted">Save a family classic or something new you want to try.</p><Button className="mt-6" onClick={openForm}>Add your first recipe</Button></div> :
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} onDelete={handleDelete} />)}
          </div>}
        {/* Add the saved recipe to local state so the list updates immediately. */}
        <Modal open={open} onClose={closeForm} title="Add Recipe">
          <AddRecipeForm onSuccess={handleCreated} />
        </Modal>
      </>
    </>
  );
}
