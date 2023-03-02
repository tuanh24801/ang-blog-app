import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // featuredPosts: Observable<any> = new Observable();
  featuredPosts: Array<any> = [];
  latestPosts: Array<any> = [];
  constructor(private post:PostsService){}

  ngOnInit(){
    this.post.loadPostFeatured().forEach(post => {
      this.featuredPosts = post;
    });

    this.post.loadPostLatest().forEach(post => {
      console.log(post);

      this.latestPosts = post;
    });

  }

}
