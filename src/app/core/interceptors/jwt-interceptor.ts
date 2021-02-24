import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthenticationService } from '../providers/authentication.service';
import {StorageKey} from 'src/app/core/config/enum';

// Helper para poder mandar el token en la cabecera
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router,     private authService: AuthenticationService    ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith('login')) {

      // add authorization header with jwt token if available
      const currentUser = JSON.parse(sessionStorage.getItem(StorageKey.CURRENT_USER));
      if (currentUser) {
        const usertoken = currentUser.usertoken;
        if (usertoken) {
          request = request.clone({
            setHeaders: {
              'x-access-token': usertoken
            }
          });
        }
      }
      // return next.handle(request).pipe(catchError((error, caught) => {
      //   // intercept the respons error and displace it to the console
      //   this.handleAuthError(error);
      //   return of(error);
      // }) as any);
    }
    return next.handle(request).pipe(catchError((error, caught) => {
      console.log("interceptor coge error");
      // intercept the respons error and displace it to the console
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    // handle your auth error or rethrow
    if (err.status === 403) {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/error']);
    }

    if (err.status === 401) {
      // Delete localStorage and redirect to login
      localStorage.clear();
      sessionStorage.clear();
      
      this.router.navigate(['/error']);
      // if you've caught / handled the error, you don't want to rethrow it unless 
      // you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
  }
}
