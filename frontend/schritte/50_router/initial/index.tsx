import { createFileRoute } from "@tanstack/react-router";
import { fetchFeedback, fetchRecipe } from "../../../components/fetchers.ts";
import RecipePageContent from "../../../components/recipepage/RecipePageContent.tsx";
import {
  GetRecipeFeedbacksResponse,
  GetRecipeResponse,
} from "../../../components/api-types.ts";
import { use } from "react";
import FeedbackSidebar from "../../../components/recipepage/FeedbackSidebar.tsx";

export const Route = createFileRoute("/recipes/$recipeId/")({
  // todo:
  // loader
  //   tl1
  //   tl3
  //   tl5
  component: RouteComponent,
});

function RouteComponent() {
  // tl2

  return <div className={"flex"}>Hello Recipe Route!</div>;
}

// tl4

// tl6
