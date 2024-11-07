import { useRecipifyWindowTitle } from "../useRecipifyWindowTitle.tsx";
import { RecipeBanner } from "./RecipeBanner.tsx";
import { CookingTime } from "./CookingTime.tsx";
import { Instructions } from "./Instructions.tsx";
import { Suspense } from "react";
import LoadingIndicator from "../LoadingIndicator.tsx";
import { FeedbackForm } from "./FeedbackForm.tsx";
import { H2 } from "../Heading.tsx";
import { Sidebar } from "../Sidebar.tsx";
import { DetailedRecipeDto } from "../api-types.ts";
import FeedbackListLoader from "./FeedbackListLoader.tsx";
import IngredientsSection from "./IngredientsSection.tsx";

type RecipePageContentProps = {
  recipe: DetailedRecipeDto;
};

export default function RecipePageContent({ recipe }: RecipePageContentProps) {
  useRecipifyWindowTitle(recipe.title);

  return (
    <div className={"mb-20 max-w-screen-lg ps-4 md:w-2/3"}>
      <RecipeBanner recipe={recipe} />
      <div className={"container mx-auto mb-8 mt-8 md:flex md:space-x-12"}>
        <div>
          <CookingTime
            cookTime={recipe.cookTime}
            preparationTime={recipe.preparationTime}
          />
          <IngredientsSection ingredients={recipe.ingredients} />
          <Instructions recipe={recipe} />
        </div>
      </div>
    </div>
  );
}
