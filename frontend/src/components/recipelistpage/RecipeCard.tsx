import { RecipeDto } from "../api-types.ts";
import { H1 } from "../Heading.tsx";
import { Link } from "@tanstack/react-router";
import React from "react";
import { RecipeCategories } from "../RecipeCategories.tsx";

type RecipeCardProps = {
  recipe: RecipeDto;
};

// Note that this RecipeCard components is marked as re-rendered
// in the devtools, even it is not (https://github.com/facebook/react/issues/19778)
// as a workaround:
//  - use profile to see that it is (not) rerendered
//  - use console.log

const RecipeCard = function RecipeCard({ recipe }: RecipeCardProps) {
  console.log("Rendering RecipeCard for Recipe", recipe.id);

  return (
    <div className={"flex flex-col justify-between"}>
      <div>
        {/*<Link to={"/recipes/$recipeId"} params={{ recipeId: recipe.id }}>*/}
        <Link>
          <div className={"overflow-hidden"}>
            <img
              className="mb-2 h-48 max-h-full w-full max-w-full transform rounded object-cover transition-all duration-500 ease-in-out hover:scale-110"
              src={`/images/recipes/food_${recipe.id}.png`}
              alt="image1"
            />
            {/*vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
            {/*<BookmarkButton recipeId={recipe.id} />*/}
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
          </div>
        </Link>
        <div className={"mt-8 flex justify-between text-red"}>
          <p
            className={
              "font-space text-sm font-medium uppercase tracking-[2px]"
            }
          >
            {recipe.mealType}
          </p>
        </div>
        <H1 className={"mb-4 mt-4 font-space font-bold"}>
          {/*
          TODO:

           - add Link ro /recipes/$recipeId
           - add preload=intent

          */}
          {recipe.title}
          {/*<Link*/}
          {/*  preload={"intent"}*/}
          {/*  to={"/recipes/$recipeId"}*/}
          {/*  params={{ recipeId: recipe.id }}*/}
          {/*  className={"hover:text-orange_2 hover:underline"}*/}
          {/*>*/}
          {/*  {recipe.title}*/}
          {/*</Link>*/}
        </H1>
        <div className={"text mt-2 font-inter text-gray-500"}>
          {recipe.headline}
        </div>
      </div>
      <div className={"mt-4 space-y-2"}>
        <RecipeCategories recipe={recipe} />
      </div>
    </div>
  );
};

export { RecipeCard };
