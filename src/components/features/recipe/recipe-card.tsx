import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import RecipeMeta from "@/components/common/recipe-meta";

type RecipeCardProps = {
  id: string;
  image: string;
  name: string;
  cuisine: string;
  mealType: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  cookTimeMinutes: number;
  tags: string[];
  onDelete: (id: string) => void;
};

export default function RecipeCard({id, image, name, cuisine, mealType, difficulty, cookTimeMinutes, tags, onDelete}: RecipeCardProps) {
  return (
    <Card className="group relative flex h-full flex-col hover:border-gold/70 hover:shadow-lift motion-safe:hover:-translate-y-1">
      {/* A gold hairline draws across the top edge on hover. */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out motion-safe:group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="h-56 overflow-hidden border-b border-line bg-parchment">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.06]" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{name}</h3>

        <RecipeMeta
          cuisine={cuisine}
          mealType={mealType}
          difficulty={difficulty}
          cookTimeMinutes={cookTimeMinutes}
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto border-t border-line pt-4">
          <Link to={`/recipe/${id}`} className="w-full">
            <Button className="w-full">View</Button>
          </Link>
          <Button variant="secondary" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
