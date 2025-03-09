import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { PostResponse, UserResponse, UserService } from '../../services/user.service';
import { forkJoin, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass, NgFor } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PaginateComponent } from "../../common/paginate/paginate.component";

interface UserPostData {
  name: string,
  username: string,
  title: string,
  completed: boolean
}
@Component({
  selector: 'app-user-post-details',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    PaginateComponent
],
  templateUrl: './user-post-details.component.html',
  styleUrls: ['./user-post-details.component.css']
})
export class UserPostDetailsComponent implements OnInit {

  private userServ = inject(UserService);
  private destroyRef = inject(DestroyRef);
  originalUserPostData: UserPostData[] = [];
  filteredData: UserPostData[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  totalItems = 0;
  loading = false;
  ngOnInit() {
    let users = this.userServ.getUserList();
    let posts = this.userServ.getPostList();
    this.getMergedData(users, posts)
  }

  getMergedData(
    users: Observable<UserResponse[]>, 
    posts: Observable<PostResponse[]>
  ) {
    this.loading = true;
    forkJoin({
      users,
      posts
    })
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (res) => {
        const users = res.users;
        const posts = res.posts;
        for(let post of posts) {
          let user = users.find(u => u.id === post.userId) as UserResponse;
          let tempObj: UserPostData = {name: '', username: '', title: '', completed: false};
          tempObj.name = user.name;
          tempObj.username = user.username;
          tempObj.title = post.title;
          tempObj.completed = post.completed;
          this.originalUserPostData.push(tempObj);
        }
        this.totalItems = this.originalUserPostData.length ;
        this.loading = false;

        this.filteredData = this.originalUserPostData.slice(this.currentPage, this.itemsPerPage);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.loading = false;
      }
    });
  }

  onPageChange(pageObj: {direction: string, page: number}) {
    if (pageObj.direction === 'prev' && pageObj.page > 0) {
      this.currentPage--;
    } else if (pageObj.direction === 'next' && pageObj.page < (this.totalItems / this.itemsPerPage -1)) {
      this.currentPage++;
    }
  
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredData = this.originalUserPostData.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page - 1;
    const start = this.itemsPerPage * this.currentPage;
    const end = start + this.itemsPerPage;
    this.filteredData = this.originalUserPostData.slice(start, end);
  }


}
