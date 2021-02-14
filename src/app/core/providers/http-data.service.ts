import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }
  
  getTest() {
    const value = this.http.get("http://localhost:3000/", {responseType: 'text'});
    return value;
  }
  
}