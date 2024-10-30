import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl : string = 'http://localhost:3000/User';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseurl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseurl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }
}
