import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{

  categories :Observable<any> = new Observable();
  constructor(private categoriesService:CategoriesService){

  }

  ngOnInit(): void {
      this.categories = this.categoriesService.loadData();
  }

}
