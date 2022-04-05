import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export interface RecipeDetail {
    ingredientId: number;
    ingredient: Ingredient[];
    recipeId: number;
    recipe: Recipe[];
    quantity: number;
    measureUnit: number;
}