import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { Ingredient } from 'src/app/_models/ingredient';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { RecipeDetail } from 'src/app/_models/recipeDetail';
import { RecipeDetailsService } from 'src/app/_services/recipeDetails.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  recipe: Recipe;
  category: Category;
  ingredients: Ingredient[];
  recipeDetails: RecipeDetail[];

  constructor(
    private recipeService: RecipesService, 
    private categoryService: CategoriesService, 
    private ingredientService: IngredientsService, 
    private recipeDetailService: RecipeDetailsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadRecipe();
    this.loadCategory();
    this.loadIngredients();
    this.loadIngredientsByRecipe();

  }
  loadRecipe() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('recipeId') as unknown as number).subscribe(recipe => {
      this.recipe = recipe;
    })
  }
  loadCategory() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('categoryId') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
  loadIngredients(){
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }
  loadIngredientsByRecipe(){
    let id = this.route.snapshot.paramMap.get('recipeId') as unknown as number;
    this.recipeDetailService.getIngredientsByRecipe(id).subscribe(recipeDetail => {
      this.recipeDetails = recipeDetail;
    } )
  }
}
