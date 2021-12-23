import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(page: number = 1): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }

  getUser(id: number): Observable<any> {
    return this.http.get('https://reqres.in/api/users/' + id);
  }
}
