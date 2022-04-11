import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeDetail } from 'src/app/_models/recipeDetail';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipeDetailsService } from 'src/app/_services/recipeDetails.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  category: Category;
  recipeDetails: RecipeDetail[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private recipeDetailService: RecipeDetailsService,
    private categoryService: CategoriesService) { }
  recipes: any;

  ngOnInit(): void {
    this.loadRecipes();
    this.loadCategory();
    //this.loadIngredientsByRecipe();
  }

  loadCategory() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('categoryId') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
  loadIngredientsByRecipe() {
    let id = this.route.snapshot.paramMap.get('recipeId') as unknown as number;
    this.recipeDetailService.getIngredientsByRecipe(id).subscribe(recipeDetail => {
      this.recipeDetails = recipeDetail;
    })
  }
  loadRecipes() {
    let id = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
    this.recipeService.getRecipesByCategory(id).subscribe(recipe => {
      this.recipes = recipe;
    })
  }
  calculateTotalCost() {
    var totalCost = 0;
    for (var index = 0; index < this.recipeDetails.length; index++)
      totalCost += this.recipeDetails[index].cost;

    return totalCost;
  }

}