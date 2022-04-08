import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { AccountService } from 'src/app/_services/account.service';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(public accountService: AccountService, private categoryService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
  

}