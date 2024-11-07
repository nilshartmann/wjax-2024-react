import { createFileRoute } from "@tanstack/react-router";
import { fetchFeedback, fetchRecipe } from "../../../components/fetchers.ts";
import RecipePageContent from "../../../components/recipepage/RecipePageContent.tsx";
import {
  GetRecipeFeedbacksResponse,
  GetRecipeResponse,
} from "../../../components/api-types.ts";
import { Suspense, use } from "react";
import FeedbackSidebar from "../../../components/recipepage/FeedbackSidebar.tsx";
import { GlobalLoadingIndicator } from "../../../components/material/GlobalLoadingIndicator.tsx";

export const Route = createFileRoute("/recipes/$recipeId/")({
  loader({ params }) {
    return {
      recipePromise: fetchRecipe(params.recipeId),
      feedbackPromise: fetchFeedback(params.recipeId),
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div className={"container mx-auto flex"}>
      <Suspense fallback={<GlobalLoadingIndicator />}>
        <Recipe recipePromise={data.recipePromise} />
        <Feedback feedbackPromise={data.feedbackPromise} />
      </Suspense>
    </div>
  );
}

type RecipeProps = { recipePromise: Promise<GetRecipeResponse> };
function Recipe({ recipePromise }: RecipeProps) {
  const recipe = use(recipePromise);
  return <RecipePageContent recipe={recipe.recipe} />;
}

type FeedbackProps = { feedbackPromise: Promise<GetRecipeFeedbacksResponse> };
function Feedback({ feedbackPromise }: FeedbackProps) {
  const feedback = use(feedbackPromise);
  return <FeedbackSidebar feedbacks={feedback.feedbacks} />;
}
