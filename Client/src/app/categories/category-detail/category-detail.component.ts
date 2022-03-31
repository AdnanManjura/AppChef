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

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getCategory(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe(category => {
      this.category = category;
    })
  }
}
