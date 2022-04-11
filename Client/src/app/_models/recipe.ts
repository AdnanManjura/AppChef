import { Category } from './category';
import { Photo } from './photo';

export interface Recipe {
    id: number;
    recipeName: string;
    recipePhoto: string;
    recipeDecsription: string;
    categories: Category[];
    photos: Photo[];
}