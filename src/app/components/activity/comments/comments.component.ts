import { Component, DestroyRef, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { CommentResponse, UserService } from '../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnChanges {

  comments: CommentResponse[] = [];
  loading = false;
  postId = input<number>();
  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['postId'] && changes['postId'].currentValue) {
      const id = changes['postId'].currentValue;
      this.getCommentsByPostId(id);
    }
  }

  getCommentsByPostId(id: number) {
    this.loading = true;
    this.userService.getComments().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (response) => {
        console.log(response);
        this.loading = false;
        this.comments = response.filter(comment => comment.postId === id);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;
      }
    })
  }
}
