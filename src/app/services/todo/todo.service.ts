import { Injectable, signal } from '@angular/core';

export interface Todo {
  id: number,
  title: string,
  description: string,
  status: 'pending' | 'completed'
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<Todo[]>([
    { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs, and Fruits', status: 'pending' },
    { id: 2, title: 'Complete project report', description: 'Finalize and submit the report by EOD', status: 'completed' },
    { id: 3, title: 'Workout', description: 'Go to the gym for an hour', status: 'pending' },
    { id: 4, title: 'Call mom', description: 'Check on her and have a chat', status: 'completed' },
    { id: 5, title: 'Read a book', description: 'Read 20 pages of Atomic Habits', status: 'pending' },
    { id: 6, title: 'Fix bug in code', description: 'Debug and resolve the login issue', status: 'pending' },
    { id: 7, title: 'Schedule team meeting', description: 'Plan the next sprint discussion', status: 'completed' },
    { id: 8, title: 'Clean the house', description: 'Vacuum and organize workspace', status: 'pending' },
    { id: 9, title: 'Pay electricity bill', description: 'Pay before the due date to avoid charges', status: 'completed' },
    { id: 10, title: 'Practice coding', description: 'Solve at least 3 Leetcode problems', status: 'pending' }
  ]);

  allTodos = this.todos.asReadonly();

  filterTodo(status: string) {
    if(status !== 'all') {
      return this.todos().filter(todo => todo.status === status);
    }
    return this.todos();
  }
  addTodo(newTodo: Todo) {
    this.todos.update((oldTodos) => [...oldTodos, newTodo]);
  }

  deleteTodo(id: number) {
    const filteredTodos = this.todos().filter(todo => todo.id !== id);
    this.todos.set(filteredTodos);
  }
}
