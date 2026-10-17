import { useEffect, useState } from "react";


import { getRecipeService, type Recipe } from "@/services/recipe-service";

import RecipeMeta from "@/components/common/recipe-meta";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import UpdateRecipeForm from "@/components/features/recipe/update-recipe-form";

export function RecipeDetails({ id }: { id: string }) {


  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    let active = true;
    async function loadRecipe(recipeId: string) {
      try {
        const result = await getRecipeService(recipeId);
        if (active) {
          setRecipe(result);
        }
      } catch {
        if (active) {
          setError("Recipe not found, or you do not have access to it.");
        }
      }
    }

    loadRecipe(id);

    function cleanup() {
      active = false;
    }

    return cleanup;
  }, [id]);

  function openForm() {
    setOpen(true);
  }

  function closeForm() {
    setOpen(false);
  }

  function handleUpdated(updatedRecipe: Recipe) {
    setRecipe(updatedRecipe);
    closeForm();
  }

  // Keep recipe content and its update dialog together in this feature.
  return (
    <>
      {error ? <p role="alert" className="mt-6 text-sm text-red-600">{error}</p> : recipe && <>
        {/* One detail card pairs the overview with the cooking sections. */}
        <Card className="mt-6">
          <div className="grid gap-8 p-5 md:grid-cols-2 md:p-8 lg:gap-12 lg:p-10">
            {/* Overview column: featured image, overlapping title, and quick facts. */}
            <div className="space-y-6">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl bg-parchment">
                  <img className="block aspect-[4/3] w-full object-cover" src={recipe.image} alt={recipe.name} />
                </div>
                {/* Title panel overlaps the image, echoing the reference card. */}
                <div className="relative z-10 mx-3 -mt-10 rounded-xl border border-line bg-paper p-4 shadow-lift md:mx-4 md:-mt-12 md:p-5">
                  <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{recipe.name}</h1>
                </div>
              </div>
              <RecipeMeta cuisine={recipe.cuisine} mealType={recipe.mealType} difficulty={recipe.difficulty} cookTimeMinutes={recipe.cookTimeMinutes} />
              <div className="flex flex-wrap gap-2">{recipe.tags.map((tag) => <Tag key={tag} className="rounded-full">{tag}</Tag>)}</div>
              <div><Button className="rounded-full" onClick={openForm}>Update</Button></div>
            </div>
            {/* Details column: ingredients and instructions as separated sections. */}
            <div className="space-y-8 lg:space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-ink">Ingredients</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-ink/80 marker:text-burgundy/70">{recipe.ingredients.map((ingredient, index) => <li key={`${ingredient}-${index}`}>{ingredient}</li>)}</ul>
              </section>
              <section className="border-t border-line pt-8 lg:pt-10">
                <h2 className="text-xl font-semibold text-ink">Instructions</h2>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-ink/80 marker:text-burgundy/70">{recipe.instructions.map((instruction, index) => <li key={`${instruction}-${index}`}>{instruction}</li>)}</ol>
              </section>
            </div>
          </div>
        </Card>
        {/* The modal reuses the recipe form and updates this page after saving. */}
        <Modal open={open} onClose={closeForm} title="Update Recipe">
          <UpdateRecipeForm recipe={recipe} onSuccess={handleUpdated} />
        </Modal>
      </>}
    </>
  );
}
