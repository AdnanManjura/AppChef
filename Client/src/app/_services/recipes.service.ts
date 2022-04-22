import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl = environment.apiUrl + 'recipes/';
  private currentRecipeSource = new ReplaySubject<Recipe>(1);

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl);
  }
  
  getRecipe(id: number) {
    return this.http.get<Recipe>(this.baseUrl + id);
  }

  getRecipesByCategory(id: number) {
    return this.http.get<Recipe[]>(this.baseUrl + 'getrecipes/' + id);
  }

  addRecipe(model: any) {
    return this.http.post(this.baseUrl + 'addRecipe', model).pipe(
      map((recipe: Recipe) => {
        if (recipe) {
          localStorage.setItem('recipe', JSON.stringify(recipe));
          this.currentRecipeSource.next(recipe);
        }
      })
    )
  }
}