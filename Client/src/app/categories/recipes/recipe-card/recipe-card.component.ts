import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Recipe } from 'src/app/_models/recipe';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
@Input() recipe: Recipe;
category: Category;

constructor(private route: ActivatedRoute, private recipeService: RecipesService, private categoryService: CategoriesService) { }
recipes: any;

  ngOnInit(): void {
    this.loadRecipe();
    this.loadCategory();
  }
  
  loadCategory(){
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('categoryId') as unknown as number).subscribe(category=>{
      this.category=category;
    })
  }

  loadRecipe() {
    let id = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
    this.recipeService.getRecipesByCategory(id).subscribe(recipe => {
      this.recipes = recipe;
    })
  }


}