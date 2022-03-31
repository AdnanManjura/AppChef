import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  category: Category;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.loadRecipe();
    this.loadCategory();
  }
  loadRecipe() {
    this.recipeService.getRecipesByCategory(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe(recipe => {
      this.recipes = recipe;
    })
  }
  loadCategory() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
}
