import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Ingredient } from 'src/app/_models/ingredient';
import { Recipe } from 'src/app/_models/recipe';
import { MeasureUnit, RecipeDetail } from 'src/app/_models/recipeDetail';
import { CategoriesService } from 'src/app/_services/categories.service';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { RecipeDetailsService } from 'src/app/_services/recipeDetails.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  category: Category;
  ingredients: Ingredient[];
  recipeDetails: RecipeDetail[];
  measureUnits: any;
  recipeId: number;
  categoryId: number;

  constructor(
    private recipeService: RecipesService,
    private categoryService: CategoriesService,
    private ingredientService: IngredientsService,
    private recipeDetailService: RecipeDetailsService,
    private route: ActivatedRoute) {
    this.measureUnits = Object.keys(MeasureUnit).filter(key => isNaN(+key)); //dropdown
    this.recipeId = this.route.snapshot.paramMap.get('recipeId') as unknown as number;
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
  }

  ngOnInit(): void {
    this.loadRecipe(this.recipeId);
    this.loadCategory(this.categoryId);
    this.loadIngredients();
    this.loadIngredientsByRecipe(this.recipeId);
  }

  loadRecipe(recipeId) {
    this.recipeService.getRecipe(recipeId).subscribe(recipe => {
      this.recipe = recipe;
    })
  }

  loadCategory(categoryId) {
    this.categoryService.getCategory(categoryId).subscribe(category => {
      this.category = category;
    })
  }

  loadIngredients() {
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }

  loadIngredientsByRecipe(recipeId) {
    this.recipeDetailService.getIngredientsByRecipe(recipeId).subscribe(recipeDetail => {
      this.recipeDetails = recipeDetail;
    })
  }

  calculateTotalCost() {
    var totalCost = 0;
    for (var index = 0; index < this.recipeDetails.length; index++)
      totalCost += this.recipeDetails[index].cost;

    return totalCost;
  }

  getMeasureUnitName(measure) {
    return MeasureUnit[measure];
  }
}