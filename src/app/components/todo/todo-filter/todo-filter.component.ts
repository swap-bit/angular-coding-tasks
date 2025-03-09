import { Component, output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {

  filterEvent = output<string>()
  onFilterChange(event: Event) {
    const selectedOption = (event.target as HTMLInputElement).value;
    this.filterEvent.emit(selectedOption);
  }
}
