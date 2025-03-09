import { Component, inject, input } from '@angular/core';
import { Todo, TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos = input.required<Todo[]>();
  private todoService = inject(TodoService)

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }
}
