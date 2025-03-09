import { NgClass, NgFor } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { TestConnectionService } from '../../../services/connection/test-connection.service';

@Component({
  selector: 'app-random-no-table',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './random-no-table.component.html',
  styleUrl: './random-no-table.component.css'
})
export class RandomNoTableComponent implements OnInit{
  tableRows: number[][] = [];
  private testConn = inject(TestConnectionService);
  selectedNumbers = computed(() => {
    return this.testConn.selectedNumber();
  });
  
  ngOnInit(): void {
    this.generateTable();
  }

  generateTable() {
    let count = 1;
    for (let i = 0; i < 10; i++) {
      this.tableRows.push(Array.from({ length: 10 }, () => count++));
    }
  }
}
