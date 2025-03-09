import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NgClass],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  disableBtn = input.required<boolean>();
  @Output() generateRandomNoFlag = new EventEmitter<boolean>();

  onStart() {
    this.generateRandomNoFlag.emit(true);
  }
}
