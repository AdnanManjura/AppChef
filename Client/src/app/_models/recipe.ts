import { Category } from './category';

export interface Recipe {
    id: number;
    name: string;
    photo: string;
    decsription: string;
    categories: Category[];
}