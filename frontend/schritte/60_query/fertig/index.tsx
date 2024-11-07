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
import { useSuspenseQuery } from "@tanstack/react-query";
import ky from "ky";
import { slowDown_GetRecipe } from "../../../demo-config.tsx";

export const Route = createFileRoute("/recipes/$recipeId/")({
  // loader({ params }) {
  //   return {
  //     // recipePromise: fetchRecipe(params.recipeId),
  //     // feedbackPromise: fetchFeedback(params.recipeId),
  //   };
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { recipeId } = Route.useParams();

  return (
    <div className={"container mx-auto flex"}>
      <Suspense fallback={<GlobalLoadingIndicator />}>
        <Recipe recipeId={recipeId} />
        <Feedback recipeId={recipeId} />
      </Suspense>
    </div>
  );
}

type RecipeProps = { recipeId: string };
function Recipe({ recipeId }: RecipeProps) {
  const result = useSuspenseQuery({
    queryKey: ["recipes", recipeId],
    async queryFn() {
      const data = await ky
        .get(`/api/recipes/${recipeId}?slowdown=${slowDown_GetRecipe}`)
        .json();

      return GetRecipeResponse.parse(data);
    },
  });

  return <RecipePageContent recipe={result.data.recipe} />;
}

// type RecipeProps = { recipePromise: Promise<GetRecipeResponse> };
// function Recipe({ recipePromise }: RecipeProps) {
//   const recipe = use(recipePromise);
//   return <RecipePageContent recipe={recipe.recipe} />;
// }

type FeedbackProps = { recipeId: string };
function Feedback({ recipeId }: FeedbackProps) {
  const result = useSuspenseQuery({
    queryKey: ["recipes", recipeId, "feedback"],
    async queryFn() {
      return fetchFeedback(recipeId);
    },
  });
  return <FeedbackSidebar feedbacks={result.data.feedbacks} />;
}



// type FeedbackProps = { feedbackPromise: Promise<GetRecipeFeedbacksResponse> };
// function Feedback({ feedbackPromise }: FeedbackProps) {
//   const feedback = use(feedbackPromise);
//   return <FeedbackSidebar feedbacks={feedback.feedbacks} />;
// }
