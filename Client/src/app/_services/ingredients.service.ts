import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../_models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  baseUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  getIngredients(){
    return this.http.get<Ingredient[]>(this.baseUrl + 'ingredients');
  }

  getIngredient(id: number){
    return this.http.get<Ingredient>(this.baseUrl + 'ingredients/' + id);
  }

}
