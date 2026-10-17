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
    <Card className="group flex h-full flex-col transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[3px] hover:border-gold hover:shadow-lift motion-reduce:transform-none">
      <div className="h-56 overflow-hidden bg-parchment">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{name}</h3>

        <RecipeMeta
          cuisine={cuisine}
          mealType={mealType}
          difficulty={difficulty}
          cookTimeMinutes={cookTimeMinutes}
        />

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
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
