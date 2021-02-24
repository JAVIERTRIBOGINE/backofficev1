import { Injectable } from '@angular/core';
import {HttpDataService, ApiEnum} from './http-data.service';
import {environment} from 'src/environments/environment';
import { User } from '../models/user';
import { catchError, debounceTime, delay, retry, switchMap, tap } from 'rxjs/operators';
// import { catchError, retry } from 'rxjs/operators';
// import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpDataService) { }

  getUsers() {
    return this.http.get$<User[]>(ApiEnum.API_ROOT, environment.endpoint.users)
      .pipe(
        retry(3),
        catchError(this.http.handleError<User[]>('getAllUser'))
      );
  }



}