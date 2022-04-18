import { Category } from './category';

export interface Recipe {
    id: number;
    recipeName: string;
    recipePhoto: string;
    recipeDecsription: string;
    categories: Category[];
}