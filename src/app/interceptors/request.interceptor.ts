import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError, timeout } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {

  let toastrServcie = inject(ToastrService);
  const token = 'new request token';
  const modifiedRequest  = req.clone({
    headers: req.headers.set('token', token)
  });
  return next(modifiedRequest).pipe(
    timeout(1500),
    catchError((error: HttpErrorResponse) => {
      // Handle different HTTP error codes
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        // Server-side error
        switch (error.status) {
          case 400:
            errorMessage = 'Bad Request: Please check your input.';
            break;
          case 401:
            errorMessage = 'Unauthorized: Please log in again.';
            break;
          case 403:
            errorMessage = 'Forbidden: You do not have access to this resource.';
            break;
          case 404:
            errorMessage = 'Not Found: The requested resource was not found.';
            break;
          case 500:
            errorMessage = 'Internal Server Error: Please try again later.';
            break;
          default:
            errorMessage = `Unexpected Error: ${error.message} (Status: ${error.status})`;
        }
      }

      // Log the error to the console (or send it to a logging service)
      console.error(`HTTP Error:`, error);
      toastrServcie.error(errorMessage, 'Error');

      // Rethrow the error so the calling service/component can handle it if needed
      return throwError(() => new Error(errorMessage, {cause: error.status}));
    })
  )
};
