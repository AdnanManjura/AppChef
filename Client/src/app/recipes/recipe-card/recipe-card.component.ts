import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Ingredient } from 'src/app/_models/ingredient';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeDetail } from 'src/app/_models/recipeDetail';
import { CategoriesService } from 'src/app/_services/categories.service';
import { IngredientsService } from 'src/app/_services/ingredients.service';
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
  categoryId: number;

  constructor(
    private recipeService: RecipesService,
    private recipeDetailService: RecipeDetailsService,
    private route: ActivatedRoute,
    private ingredientService: IngredientsService,
    private categoryService: CategoriesService) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
  }

  ngOnInit(): void {
    this.loadCategory(this.categoryId);
  }

  loadCategory(categoryId) {
    this.categoryService.getCategory(categoryId).subscribe(category => {
      this.category = category;
    })
  }
}