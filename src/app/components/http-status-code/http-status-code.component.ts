import { Component, DestroyRef, inject } from '@angular/core';
import { HttpStatusResponse, StatusCodeService } from '../../services/status-code/status-code.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-http-status-code',
  standalone: true,
  providers: [
  ],
  templateUrl: './http-status-code.component.html',
  styleUrls: ['./http-status-code.component.css']
})
export class HttpStatusCodeComponent  {

  private statusCodeService = inject(StatusCodeService);
  private destroyRef = inject(DestroyRef);
  responseFromApi!: HttpStatusResponse;
  statusCodes = [200, 201, 400, 401, 403, 404, 500];
  onStatusCodeChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.getResponse(parseInt(value));
  }


  getResponse(statusCode: number) {
    this.statusCodeService.getRequestResponse(statusCode)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (res) => {
          this.responseFromApi = res;
        },
        error: (error: HttpErrorResponse) => {
          this.responseFromApi = error.error;
        }
      })
  }
}
