import IngredientsWidget, { CurrencyProvider } from "./IngredientsWidget.tsx";
import { singleRecipe } from "./ingredient-data.ts";

export default function ContextApp() {
  return (
    <div className={"container mx-auto max-w-xl"}>
      <CurrencyProvider>
        <IngredientsWidget ingredients={singleRecipe.ingredients} />
      </CurrencyProvider>
    </div>
  );
}
