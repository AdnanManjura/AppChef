import { Category } from './category';

export interface Recipe {
    id: number;
    name: string;
    photo: string;
    description: string;
    categories: Category[];
}