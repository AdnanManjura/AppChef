import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/_models/category';
import { CategoriesService } from 'src/app/_services/categories.service';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  category: Category
  model: any = {};
  constructor(
    private recipeService: RecipesService, 
    private categoryService: CategoriesService, 
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  addRecipe(){
    this.recipeService.addRecipe(this.model).subscribe(response => {
        console.log(response);
    }, error => {
      console.log(error);
    })
  }

  loadCategories() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('categoryId') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
}