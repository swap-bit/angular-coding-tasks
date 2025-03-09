import { afterRender, Component, inject, OnInit, signal } from '@angular/core';
import { TestConnectionService } from '../../services/connection/test-connection.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-test-connection',
  standalone: true,
  imports: [],
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent implements OnInit {

  private connectionService = inject(TestConnectionService);
  connectionStatus = signal<boolean>(false);
  ngOnInit() {
    this.connectionService.checkConnection().subscribe({
      next: (connection) => {
        this.connectionStatus.set(connection);
        // debugger;
      },
      error: (error) => {
        this.connectionStatus.set(false);
      }
    });
  }

}
