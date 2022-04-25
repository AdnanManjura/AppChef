import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { CategoriesService } from 'src/app/_services/categories.service';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  categoryId: number

  constructor(
    private categoryService: CategoriesService, 
    private route: ActivatedRoute) {
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