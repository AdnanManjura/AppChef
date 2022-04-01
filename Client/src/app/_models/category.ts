import { Photo } from './photo';

export interface Category {
    id: number;
    categoryName: string;
    categoryPhoto: string;
    photos: Photo[];
}