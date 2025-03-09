import { Component, inject } from '@angular/core';
import { RandomNoTableComponent } from "./random-no-table/random-no-table.component";
import { StartComponent } from "./start/start.component";
import { TestConnectionService } from '../../services/connection/test-connection.service';

@Component({
  selector: 'app-random-no',
  standalone: true,
  imports: [
    RandomNoTableComponent,
    StartComponent
],
  templateUrl: './random-no.component.html',
  styleUrl: './random-no.component.css'
})
export class RandomNoComponent {

  disable = false;
  randomNo = 0;
  private testConnServ = inject(TestConnectionService);

  generateRandomNo() {
    this.disable = true;
    const intervalRef = setInterval(() => {
      this.randomNo = Math.floor(Math.random() * 100)
      this.testConnServ
      while(this.testConnServ.selectedNumber().has(this.randomNo)) {
        this.randomNo = Math.floor(Math.random() * 100)
      }
    }, 50);
    setTimeout(() => {
      this.testConnServ.selectedNumber().add(this.randomNo);
      this.disable = false;
      clearInterval(intervalRef);
    }, 2000);
  }
}
