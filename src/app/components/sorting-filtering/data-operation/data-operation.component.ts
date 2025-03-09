import { Component, Input, input, OnInit } from '@angular/core';
import { Data } from '../sorting-filtering.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-data-operation',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './data-operation.component.html',
  styleUrls: ['./data-operation.component.css']
})
export class DataOperationComponent implements OnInit {

  @Input() data: Data[] = [];
  ngOnInit() {
  }

  sortByName(sortType: string) {
    console.log(sortType);
    if(sortType === 'asc') {
      this.data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.data.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  sortByNo(sortType: string) {
    if(sortType === 'asc') {
      this.data.sort((a, b) => a.no > b.no ? 1: -1);
    } else {
      this.data.sort((a, b) => a.no > b.no ? -1: 1);
    }
  }

  removeDuplicate(type: string) {
    console.log(type);
    if(type === 'no') {
      this.data = this.data.filter((el, index, arr) => {
        return arr.findIndex((d) => d.no === el.no) === index;
      })
    } else {
      this.data = this.data.filter((el, index, arr) => {
        return arr.findIndex((d) => d.name === el.name) === index;
      })
    }
  }
}
