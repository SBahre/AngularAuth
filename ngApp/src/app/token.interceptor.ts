import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  let authService = inject(AuthService);

  let tokenizedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`,
    },
  });
  return next(tokenizedReq);
};
