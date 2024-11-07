import IngredientsWidget from "./IngredientsWidget.tsx";
import { singleRecipe } from "./ingredient-data.ts";

export default function CompilerApp() {
  return (
    <div className={"container mx-auto max-w-xl"}>
      <IngredientsWidget ingredients={singleRecipe.ingredients} />
    </div>
  );
}
