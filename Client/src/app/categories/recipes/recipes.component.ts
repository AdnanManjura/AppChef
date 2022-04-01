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
  
  loadCategory() {
    let id = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
    this.categoryService.getCategory(id).subscribe(category => {
      this.category = category;
    })
  }
  loadRecipe() {
    let id = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
    this.recipeService.getRecipesByCategory(id).subscribe(recipe => {
      this.recipes = recipe;
    })
  }
}
