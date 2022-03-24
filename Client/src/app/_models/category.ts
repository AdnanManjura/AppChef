import { Photo } from './photo';

export interface Category {
    categoryId: number;
    categoryName: string;
    categoryPhoto: string;
    photos: Photo[];
}