import { Link, useParams } from "react-router";
import { Section } from "@/components/ui/section";
import { RecipeDetails } from "@/components/features/recipe/recipe-details";

export default function RecipePage() {
  const { id } = useParams();

  // The page reads the URL; the feature fetches and displays that recipe.
  return (
    <Section>
      <Link to="/user" className="text-sm font-medium text-burgundy transition-colors duration-200 hover:text-claret">
        ← Back to recipes
      </Link>

      {id && <RecipeDetails key={id} id={id} />}
    </Section>
  );
}
