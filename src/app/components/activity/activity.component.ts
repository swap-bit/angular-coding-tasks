import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UsernameComponent } from "./username/username.component";
import { PostsComponent } from "./posts/posts.component";
import { UserResponse, UserService } from '../../services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

export interface UsernameInfo {
  userId: number,
  username: string
}
@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [UsernameComponent, PostsComponent],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);
  users: UserResponse[] = [];
  userId!: number;
  ngOnInit() {
    this.getUsers() 
  }

  userEvt(id: number) {
    this.userId = id;
  }
  getUsers() {
    this.userService.getUserList().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })
  }  
}
