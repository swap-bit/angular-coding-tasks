import { Component, computed, inject, signal } from '@angular/core';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoService } from '../../services/todo/todo.service';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AddTodoComponent, TodoListComponent, TodoFilterComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  selectedFilter = signal<string>('all');
  private todoService = inject(TodoService);

  todos = computed(() => {
    switch(this.selectedFilter()) {
      case 'pending':
        return this.todoService.allTodos().filter(todo => todo.status === 'pending')
      case 'completed':
        return this.todoService.allTodos().filter(todo => todo.status === 'completed')
      default:
        return this.todoService.allTodos();
    }
    return this.todoService.allTodos()
  })

  onFilterEvent(filterValue: string) {
    this.selectedFilter.set(filterValue);
  }
}
