import { Component, DestroyRef, inject, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { PostResponse, UserService } from '../../../services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentsComponent } from "../comments/comments.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommentsComponent, NgClass],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnChanges {

  userId = input<number>();
  postEvent = output<number>();
  postId!: number;
  posts: PostResponse[] = [];
  loading = false;
  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userId'] && changes['userId'].currentValue) {
      const id = changes['userId'].currentValue;
      this.getPostsByUserId(id)
    }
  }

  getPostsByUserId(userId: number) {
    this.loading = true;
    this.userService.getPosts().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (response) => {
        this.posts = response.filter(post => post.userId === userId);
        this.loading = false;
        console.log('posts res: ',this.posts);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;

      }
    })
  }

  onPostClick(id: number) {
    this.postId = id;
  }
}
