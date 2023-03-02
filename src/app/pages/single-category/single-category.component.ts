import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  singlePosts: Array<any> = [];
  categoryName:string = '';
  constructor(private route:ActivatedRoute, private post:PostsService){}

  ngOnInit() :void {
    this.route.params.subscribe(val => {
      this.post.loadCategoryPost(val).subscribe(
        val => this.singlePosts = val
      );
      this.categoryName = val['category'];

    })
  }
}
