import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
}