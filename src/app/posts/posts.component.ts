import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../postService/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsData: any;

  constructor(private postServiceService: PostServiceService) { }

  ngOnInit(): void {
    this.getUsersPost();
  }
  getUsersPost() {
    this.postServiceService.getUsersPost().subscribe(
      (resp) => {
        this.postsData = resp
      }
    )
  }
}
