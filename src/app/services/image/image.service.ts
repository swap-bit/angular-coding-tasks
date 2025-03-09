import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private http = inject(HttpClient);

  getImage(id: number): Observable<Blob> {
    return this.http.get(`https://picsum.photos/id/${id}/200/300`, { responseType: 'blob'});
    // return this.http.get('http://localhost:3000/api/image', { responseType: 'blob'})
  }
}
