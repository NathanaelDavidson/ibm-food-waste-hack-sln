import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LogoutInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => event,
                (err: any) => {
                    if (err instanceof HttpErrorResponse && err.status === 401) {
                        this.auth.clearLoginData();
                        this.router.navigate(['/unexpectedlogout']);
                    }
                }
            )
        );
    }
}