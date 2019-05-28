import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit() {
      this.postService.getPosts();
      this.postsSub = this.postService.getPostUpdatedListner().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestoy() {
    this.postsSub.unsubscribe();
  }
}
