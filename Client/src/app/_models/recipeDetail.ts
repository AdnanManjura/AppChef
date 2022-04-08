import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export interface RecipeDetail {
    ingredientId: number;
    ingredient: Ingredient;
    recipeId: number;
    recipe: Recipe;
    quantity: number;
    measureUnit: string;
    cost: number;
}

export enum MeasureUnit {
    g = 1,
    ml = 2,
    kg = 3,
    L = 4,
    pcs = 5,
}