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
  id: number

  constructor(
    private categoryService: CategoriesService, 
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('categoryId') as unknown as number;
  }
  ngOnInit(): void {
    this.loadCategory(this.id);
  }

  loadCategory(id) {
    this.categoryService.getCategory(id).subscribe(category => {
      this.category = category;
    })
  }
}
