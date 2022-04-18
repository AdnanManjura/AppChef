import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/_models/category';
import { Ingredient } from 'src/app/_models/ingredient';
import { MeasureUnit } from 'src/app/_models/recipeDetail';
import { CategoriesService } from 'src/app/_services/categories.service';
import { IngredientsService } from 'src/app/_services/ingredients.service';
import { RecipesService } from 'src/app/_services/recipes.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  category: Category
  ingredients: Ingredient[]
  model: any = {}
  measureUnits: MeasureUnit
  categoryId: any
  
  constructor(
    private recipeService: RecipesService,
    private categoryService: CategoriesService,
    private ingredientService: IngredientsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { 
      this.categoryId = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
    }

  ngOnInit(): void {
    this.model.categoryId = this.categoryId;
    this.loadCategories();
    this.loadIngredients();
  }

  addRecipe() {
    console.log(this.model);   
    this.recipeService.addRecipe(this.model).subscribe(response => {
      this.router.navigateByUrl("/categories");
      console.log(response);
      
    }, error => {
      console.log(error);
    })
  }

  loadIngredients() {
    this.ingredientService.getIngredients().subscribe(ingredient => {
      this.ingredients = ingredient;
    })
  }

  loadCategories() {
    this.categoryService.getCategory(this.categoryId).subscribe(category => {
      this.category = category;
    })
  }

  getMeausureUnitName(measure){
    return MeasureUnit[measure];
  }
}