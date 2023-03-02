import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  singlePost:any = [];
  featuredPosts: Array<any> = [];
  postId :string = '';
  constructor(private router:ActivatedRoute, private post:PostsService){}
  ngOnInit(){
    this.router.params.subscribe(val => {
      this.postId = val['id'];
      this.post.loadSinglePost(val['id']).subscribe(
        val => {
          this.singlePost = val;
          this.loadSimilarPost(this.singlePost[0].category.category).subscribe( (value) => {
            this.featuredPosts = value;
          });
        }
      )
    });
    this.post.countView(this.postId);
  }

  loadSimilarPost(id:string){
    return this.post.loadSimilar(id);
  }


}
