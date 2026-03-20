export type Dish = {
  slug: string;
  imageExt: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
};

export const dishes: Dish[] = [
  {
    slug: "placeholder-dish",
    imageExt: "jpg",
    title: "Your First Recipe",
    description: "A short description of the dish.",
    ingredients: ["Ingredient 1", "Ingredient 2"],
    steps: ["Step one.", "Step two."],
    tags: ["tag1"],
  },
];
