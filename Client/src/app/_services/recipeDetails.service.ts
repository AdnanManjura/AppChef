import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecipeDetail } from '../_models/recipeDetail';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRecipeDetails(){
    return this.http.get<RecipeDetail[]>(this.baseUrl + 'recipedetails');
  }

  getRecipeDetail(id: number){
    return this.http.get<RecipeDetail>(this.baseUrl + 'recipedetails' + id);
  }

  getIngredientsByRecipe(id: number){
    return this.http.get<RecipeDetail[]>(this.baseUrl + 'recipedetails/getingredientsbyrecipe/' + id);
  }
}
