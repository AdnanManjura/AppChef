import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  recipe: Recipe;
  category: Category;

  constructor(private recipeService: RecipesService, private categoryService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadRecipe();
    this.loadCategory();
  }
  loadRecipe() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe(recipe => {
      this.recipe = recipe;
    })
  }
  loadCategory() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
}
