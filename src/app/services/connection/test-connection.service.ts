import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestConnectionService {

  private http = inject(HttpClient);

  private destroyRef = inject(DestroyRef);
  url: string  = 'https://dummyjson.com/test'
  selectedNumber = signal<Set<number>>(new Set());

  checkConnection(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.retryConnection(this.getConnectionStatus(), 3, 1000).subscribe({
        next: (res) => {
          console.log('Connection successful:', res);
          observer.next(true); // Emit success
          observer.complete(); // End observable
        },
        error: (error) => {
          console.log('Failed to connect after retries:', error);
          observer.next(false); // Emit failure
          observer.complete(); // End observable
        }
      });

    })
  }
  getConnectionStatus() {
    return this.http.get(this.url);   
  }


  retryConnection(fn: Observable<any>, retryCount = 3, delay = 1000) {

    return new Observable<any>((observer) => {
      const retry = (retryCount: number) => {
        fn
        .pipe(
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe({
          next: (res: any) => {
            observer.next(res); // Forward success
            observer.complete(); // End observable
          },
          error: (error: HttpErrorResponse) => {
            console.log(`failed to connect!, retrying: ${retryCount}, delay: ${delay}`);
            if(retryCount > 0) {
              setTimeout(() => {
                retry(retryCount - 1);
              }, delay);
            } else {
              observer.error(error); // Emit error after retries are exhausted
            }
          }
        })
      }
      retry(retryCount);
    })
  }
  
}
