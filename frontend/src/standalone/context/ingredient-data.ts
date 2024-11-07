import z from "zod";

const Ingredient = z.object({
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
  orderNo: z.number(),
  price: z.number(),
});

export type Ingredient = z.infer<typeof Ingredient>;

export const singleRecipe = {
  id: "40",
  createdAt: "2024-07-10T00:00:00",
  userFullname: "Nils",
  title: "French Onion Soup",
  headline:
    "Rich and flavorful onion soup topped with cheesy toast. Making everyday cooking fun! A delight to the taste buds.",
  preparationTime: 15,
  cookTime: 45,
  categories: [
    {
      type: "Cuisine Type",
      title: "Mexican",
      description: "Features recipes originating from Mexico.",
      icon: "fa-solid fa-flag",
    },
    {
      type: "Dietary",
      title: "Vegan",
      description: "Recipes suitable for vegans, with no animal products.",
      icon: "fa-solid fa-wheat-awn",
    },
    {
      type: "Difficulty",
      title: "Medium",
      description:
        "Requires a bit more time and effort, could involve slightly complex procedures or more ingredients.",
      icon: "fa-solid fa-utensils",
    },
  ],
  mealType: "Lunch",
  averageRating: 4.75,
  likes: 33,
  instructions: [
    {
      orderNo: 1,
      description:
        "Caramelize the onions in a pot until golden brown. Stir occasionally to prevent them from sticking.",
    },
    {
      orderNo: 2,
      description:
        "Add beef broth to the pot, and let it simmer. This will combine the flavors and make the soup rich.",
    },
    {
      orderNo: 3,
      description:
        "Pour soup into ovenproof bowls, top each with a slice of bread and some shredded Gruyère. The bread adds a crunch that contrasts nicely with the soft onions.",
    },
    {
      orderNo: 4,
      description:
        "Put the bowls under your oven broiler until the cheese has melted and bubbly. Watch closely to avoid burning!",
    },
  ],
  ingredients: [
    { name: "Onions", amount: 2.0, unit: "Pieces", orderNo: 1, price: 0.85 },
    {
      name: "Beef Broth",
      amount: 400.0,
      unit: "ml",
      orderNo: 2,
      price: 7.45,
    },
    { name: "Bread", amount: 4.0, unit: "Slices", orderNo: 3, price: 2.98 },
    {
      name: "Gruyère Cheese",
      amount: 100.0,
      unit: "Grams",
      orderNo: 4,
      price: 8.12,
    },
  ] as Ingredient[],
} as const;
