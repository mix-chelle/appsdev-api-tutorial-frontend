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
    <Card className="group flex h-full flex-col hover:border-gold/60 hover:shadow-lift motion-safe:hover:-translate-y-1">
      <div className="m-4 mb-0 aspect-[4/3] overflow-hidden rounded-2xl bg-parchment md:m-5 md:mb-0">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.05]" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <h3 className="text-lg font-semibold tracking-tight text-ink md:text-xl">{name}</h3>

        <RecipeMeta
          cuisine={cuisine}
          mealType={mealType}
          difficulty={difficulty}
          cookTimeMinutes={cookTimeMinutes}
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} className="rounded-full">{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <Link to={`/recipe/${id}`} className="w-full">
            <Button className="w-full rounded-full">View</Button>
          </Link>
          <Button variant="secondary" className="rounded-full" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
