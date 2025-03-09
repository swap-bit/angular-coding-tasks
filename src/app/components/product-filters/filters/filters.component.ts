import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgClass],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {

  filterType = input.required<string>();
  filterValues = input.required<string[]>();
  filterEvent = output<{selectedType: string, filterType:string}>();
  selectedFilter = signal<string>('');
 
  onFilterSelect(selectedType: string) {
    this.selectedFilter.set(selectedType);
    this.filterEvent.emit({
      selectedType,
      filterType: this.filterType()
    })
  }

}
