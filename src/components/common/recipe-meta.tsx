type RecipeMetaProps = {
  cuisine: string;
  mealType: string[];
  difficulty: string;
  cookTimeMinutes: number;
};

export default function RecipeMeta({ cuisine, mealType, difficulty, cookTimeMinutes }: RecipeMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
      <div><dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Cuisine</dt><dd className="mt-0.5 font-medium text-ink">{cuisine}</dd></div>
      <div><dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Meal type</dt><dd className="mt-0.5 font-medium text-ink">{mealType.join(", ")}</dd></div>
      <div><dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Difficulty</dt><dd className="mt-0.5 font-medium text-ink">{difficulty}</dd></div>
      <div><dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Cook time</dt><dd className="mt-0.5 font-medium text-ink">{cookTimeMinutes} mins</dd></div>
    </dl>
  );
}
