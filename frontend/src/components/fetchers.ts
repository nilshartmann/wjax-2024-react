import ky from "ky";
import { slowDown_GetFeedbacks, slowDown_GetRecipe } from "../demo-config.tsx";
import { GetRecipeResponse } from "./api-types.ts";
import { fetchFromApi, getEndpointConfig } from "./fetch-from-api.ts";

export async function fetchRecipe(recipeId: string) {
  const recipe = await ky
    .get(`/api/recipes/${recipeId}?slowdown=${slowDown_GetRecipe}`)
    .json();
  return GetRecipeResponse.parse(recipe);
}

export async function fetchFeedback(recipeId: string) {
  return fetchFromApi(
    getEndpointConfig("get", "/api/recipes/{recipeId}/feedbacks"),
    {
      path: {
        recipeId,
      },
      query: {
        slowdown: slowDown_GetFeedbacks,
      },
    },
  );
}
