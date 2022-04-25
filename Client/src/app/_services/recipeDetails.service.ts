import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecipeDetail } from '../_models/recipeDetail';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {
baseUrl = environment.apiUrl + 'recipedetails/';

  constructor(private http: HttpClient) { }

  getIngredientsByRecipe(id: number){
    return this.http.get<RecipeDetail[]>(this.baseUrl + 'getingredientsbyrecipe/' + id);
  }
}