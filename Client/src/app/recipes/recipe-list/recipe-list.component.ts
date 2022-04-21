import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  category: Category;
  categoryId: number;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private categoryService: CategoriesService) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
  }

  ngOnInit(): void {
    this.loadRecipe(this.categoryId);
    this.loadCategory(this.categoryId);
  }

  loadCategory(categoryId) {
    this.categoryService.getCategory(categoryId).subscribe(category => {
      this.category = category;
    })
  }

  loadRecipe(categoryId) {
    this.recipeService.getRecipesByCategory(categoryId).subscribe(recipe => {
      this.recipes = recipe;
    })
  }
}
