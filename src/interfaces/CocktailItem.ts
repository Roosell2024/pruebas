export interface CocktailItem {
  flavor: Array<string>,
  img: string;
  name: string;
  method: string;
  glass: string;
  ice: string;
  garnish: string;
  levelDifficulty: string;
  videoUrl: string;
  ingredients: {
    quantity: string;
    name: string;
    hasIcon?: boolean;
    customClass?: string;
  }[];
}
