import { NgClass } from '@angular/common';
import { Component, computed, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  currentPage = input.required<number>();
  itemsPerPage = input.required<number>();
  totalItems = input.required<number>();
  pageChangeEvent = output<{direction: string, page: number}>();
  goToPageEvent = output<number>();
  pages = computed(() => {
    return Array.from({ length:this.totalItems() / this.itemsPerPage() }, (_, i) => i + 1);
  });

  onPageChange(direction: 'prev' | 'next') {
    let value = this.currentPage();
    if(direction === 'prev') {
      this.pageChangeEvent.emit({direction, page: value-- })
    } else if(direction === 'next'){
      this.pageChangeEvent.emit({direction, page: value++ })
    }
  }

  goToPage(page: number) {
    this.goToPageEvent.emit(page);
  }
}
