import { Component, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.css']
})
export class BooksFilterComponent implements OnInit {

  minValue: number | undefined;
  maxValue: number | undefined;
  filterValues = output<{min: number, max: number}>();
  resetEvent = output();
  errorMsg: string = '';

  ngOnInit() {
  }

  onFilter() {
    if(this.minValue && this.maxValue) {
      if(this.minValue > this.maxValue) {
        this.errorMsg = 'Min value must be less than Max value.'
      }
      if(!this.errorMsg) {
        this.filterValues.emit({min: this.minValue, max: this.maxValue})
      }
    }
    console.log('filter values: ', this.minValue, this.maxValue);
  }
  onReset() {
    this.minValue = undefined;
    this.maxValue = undefined;
    this.errorMsg = '';
    this.resetEvent.emit()
  }
}
