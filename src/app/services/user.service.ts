import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserDataResponse } from '../models/user.model';

export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface PostResponse {
  userId: number
  id: number
  title: string
  completed: boolean
}
export interface CommentResponse {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUsersForSearching(searchTerm: string) {
    return this.http.get<UserDataResponse>(`https://dummyjson.com/users/search?q=${searchTerm}`, { responseType: 'json'})

  }
  getUserList() {
    return this.http.get<UserResponse[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPostList() {
    return this.http.get<PostResponse[]>('https://jsonplaceholder.typicode.com/todos')
  }

  getFakeUserData() {
    return this.http.get<UserDataResponse[]>('https://dummyjson.com/users')
  }

  getPosts() {
    return this.http.get<PostResponse[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getComments() {
    return this.http.get<CommentResponse[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
