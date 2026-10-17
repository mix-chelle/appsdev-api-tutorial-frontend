import { Table } from "@/components/ui/table";
import { Tag } from "@/components/ui/tag";
import type { AdminRecipe } from "@/services/recipe-service";

export type { AdminRecipe } from "@/services/recipe-service";

type AdminRecipesTableProps = {
  recipes: AdminRecipe[];
  loading: boolean;
};

// Display only: fetching data and handling errors belongs to AdminRecipes.
export function AdminRecipesTable({ recipes, loading }: AdminRecipesTableProps) {
  return (
    <Table>
      <caption className="sr-only">Recipes from all users</caption>
      <thead>
        <tr>
          <th scope="col">Recipe</th>
          <th scope="col">Cuisine</th>
          <th scope="col">Meal type</th>
          <th scope="col">Difficulty</th>
          <th scope="col">Cook time</th>
          <th scope="col">Owner ID</th>
          <th scope="col">Owner Name</th>
        </tr>
      </thead>
      <tbody>
        {!loading && recipes.length === 0 && (
          <tr>
            <td colSpan={7} className="text-center text-muted">No recipes have been created yet.</td>
          </tr>
        )}
        {recipes.map(function renderRecipe(recipe) {
          return (
            <tr key={recipe.id}>
              <td>
                <div className="flex min-w-48 items-center gap-3">
                  <img src={recipe.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <span className="font-medium text-ink">{recipe.name}</span>
                </div>
              </td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.mealType.join(", ")}</td>
              <td><Tag>{recipe.difficulty}</Tag></td>
              <td>{recipe.cookTimeMinutes} mins</td>
              <td className="font-mono text-xs">{recipe.userId}</td>
              <td>{recipe.ownerName || "Unnamed user"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
