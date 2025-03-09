import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import { FormControl, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-searching',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    NgClass
  ],
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  originalUsers: User[] = [];
  filteredUsers: User[] = [];
  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);
  searchControl = new FormControl()
  searchTerm = '';
  
  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query: string) => {
          this.searchTerm = query.trim();
          return query ? this.filterUser(query): of({users: this.originalUsers})
        })
      )
      .subscribe({
        next: (res) => {
          this.filteredUsers = res.users;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error)
        }
      })

    this.filterUser(this.searchTerm)
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (res) => {
        console.log(res);
        this.originalUsers = res.users;
        this.filteredUsers = this.originalUsers;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
      }
    })
  }

  onSearch(term: string) {
    console.log(term);
    this.searchTerm = term;
    this.searchControl.setValue(term);
  }

  filterUser(searchTerm: string) {
    return this.userService.getUsersForSearching(searchTerm);
  }
}
