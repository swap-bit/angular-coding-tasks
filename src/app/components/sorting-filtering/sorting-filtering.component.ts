import { Component, OnInit } from '@angular/core';
import { DataOperationComponent } from "./data-operation/data-operation.component";

export interface Data {
  name: string,
  no: number
}
@Component({
  selector: 'app-sorting-filtering',
  standalone: true,
  imports: [DataOperationComponent],
  templateUrl: './sorting-filtering.component.html',
  styleUrls: ['./sorting-filtering.component.css']
})
export class SortingFilteringComponent implements OnInit {

  data: Data[] = [
    {
      name: 'ABC',
      no: 111
    },
    {
      name: 'ABB',
      no: 999
    },
    {
      name: 'DEF',
      no: 333
    },
    {
      name: 'AQQ',
      no: 444
    },
    {
      name: 'PQR',
      no: 999,
    },
    {
      name: 'PPP',
      no: 678
    },
    {
      name: 'DEF',
      no: 290
    },
    {
      name: 'STU',
      no: 347
    }
  ]
  ngOnInit() {
  }

}
