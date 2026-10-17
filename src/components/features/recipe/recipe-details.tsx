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
        {/* Keep image, metadata, and cooking steps grouped in one detail card. */}
        <Card className="mt-6">
          <div className="border-b border-line bg-parchment"><img className="h-64 w-full object-cover md:h-[440px]" src={recipe.image} alt={recipe.name} /></div>
          <div className="space-y-8 p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{recipe.name}</h1>
                <span className="mt-3 block h-[2px] w-12 rounded-full bg-gold" aria-hidden="true" />
              </div>
              <Button onClick={openForm}>Update</Button>
            </div>
            <RecipeMeta cuisine={recipe.cuisine} mealType={recipe.mealType} difficulty={recipe.difficulty} cookTimeMinutes={recipe.cookTimeMinutes} />
            <div className="flex flex-wrap gap-2">{recipe.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            <div><h2 className="mb-3 text-xl font-semibold text-ink">Ingredients</h2><ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-ink/80 marker:text-burgundy/70">{recipe.ingredients.map((ingredient, index) => <li key={`${ingredient}-${index}`}>{ingredient}</li>)}</ul></div>
            <div><h2 className="mb-3 text-xl font-semibold text-ink">Instructions</h2><ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-ink/80 marker:text-burgundy/70">{recipe.instructions.map((instruction, index) => <li key={`${instruction}-${index}`}>{instruction}</li>)}</ol></div>
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
