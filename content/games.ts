export type Game = {
  slug: string;
  imageExt: string;
  title: string;
  genre: string;
  rating: number;
  played: string;
  notes: string;
};

export const games: Game[] = [
  {
    slug: "placeholder-game",
    imageExt: "jpg",
    title: "Your Favorite Game",
    genre: "RPG",
    rating: 10,
    played: "2024",
    notes:
      "Add your notes here. Drop a cover image at `public/games/placeholder-game.jpg` and update the slug.",
  },
];
