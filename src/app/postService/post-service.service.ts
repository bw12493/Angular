import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {


  constructor(private http: HttpClient) { }

  getUsersPost() {
    var posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return posts;
  }
}

