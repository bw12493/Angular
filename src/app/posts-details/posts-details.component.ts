import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../postService/post-service.service';


@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  selectedPostId: any;
  selectUserDetails: any;

  constructor(private route: ActivatedRoute,
    private postDetails: PostServiceService) { }

  ngOnInit(): void {
    this.selectedPostId = this.route.snapshot.params["id"];
    this.getPostdetails();
  }
  getPostdetails() {
    this.postDetails.getUsersPost().subscribe(
      (resp) => {
        if (Array.isArray(resp)) {
          resp.filter(item => {
            if (this.selectedPostId == item.id) {
              this.selectUserDetails = item;
            }
          });
        }
      }
    )
  }
}
