import { Component, input, output } from '@angular/core';
import { UserResponse } from '../../../services/user.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [NgClass],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  users = input.required<UserResponse[]>();
  selectedUserId: number | null = null;
  userEvent = output<number>();

  onUserClick(id: number) {
    this.selectedUserId = id;
    this.userEvent.emit(id);
  }
}
