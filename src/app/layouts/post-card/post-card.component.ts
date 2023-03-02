import { Observable } from 'rxjs';
import { Component,Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{

  post:any;
  categoryName:any;
  datePost:any
  @Input() postDataFeatured:Object = new Object();


  ngOnInit() {
    this.post = this.postDataFeatured;
    this.categoryName = {...this.post.category}.categoryId
  }

  onClick(postId:any){
    console.log(postId);

  }


}
