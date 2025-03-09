import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface HttpStatusResponse {
  code: number,
  description: string
}
@Injectable({
  providedIn: 'root'
})
export class StatusCodeService {

  url = 'https://httpstat.us';
  private http = inject(HttpClient);

  getRequestResponse(statusCode: number) {
    return this.http.get<HttpStatusResponse>(`${this.url}/${statusCode}`);
  }

}
