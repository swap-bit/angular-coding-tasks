import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  todoForm!: FormGroup;
  private fb = inject(FormBuilder);
  private todoService = inject(TodoService);
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if(this.todoForm.invalid) {
      return;
    }
    const todoObj: Todo = {
      ...this.todoForm.value,
      status: 'pending',
      id: this.generateUniqueId()
    }
    this.todoService.addTodo(todoObj);
    this.todoForm.reset();
  }

  generateUniqueId(): number {
    let id = Math.floor(Math.random() * 100);
    const existingIds = this.todoService.allTodos().map(todo => todo.id);
    while(existingIds.includes(id)) {
      id = Math.floor(Math.random() * 100);
    }
    return id;
  }
}
