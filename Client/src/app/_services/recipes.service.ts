import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl = environment.apiUrl;
  private currentRecipeSource = new ReplaySubject<Recipe>(1);

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl + 'recipes');
  }
  getRecipe(id: number) {
    return this.http.get<Recipe>(this.baseUrl + 'recipes/' + id);
  }
  getRecipesByCategory(id:number){
    return this.http.get<Recipe[]>(this.baseUrl+'recipes/getrecipesbycategory/'+id);
  }
  addRecipe(model: any){
    return this.http.post(this.baseUrl + 'recipes/addRecipe', model).pipe(
      map((recipe: Recipe) => {
        if(recipe){
          localStorage.setItem('recipe', JSON.stringify(recipe));
          this.currentRecipeSource.next(recipe);
        }
      })
    )
  }
}