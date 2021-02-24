import { Injectable } from '@angular/core';
import {HttpDataService, ApiEnum} from './http-data.service';
import {environment} from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpDataService
  ) { }

  login(username: string, password: string) {
    const entercode = btoa(btoa(username) + '.' + btoa(password));
    const requestJSON = { apiLog: true, entercode };

    return this.http.post$<any>(ApiEnum.API_ROOT, environment.endpoint.loginUrl, requestJSON)
      .pipe(map((res: any) => {
        // login successful if there's a jwt token in the response
        if (res && res.usertoken) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          const currentUser = JSON.stringify({
            username,
            name: res.name,
            email: res.mail,
            alias: res.alias,
            userRol: res.userRol,
            usertoken: res.usertoken,
            userId: res.id
          });
          sessionStorage.setItem('currentUser', currentUser);
        }
      }));
  }
 

  isLogged(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }
}
