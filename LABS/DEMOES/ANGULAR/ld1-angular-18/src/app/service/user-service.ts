import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";


@Injectable({
    providedIn: 'root'
})

export class UserService{
    baseUrl : string = 'http://localhost:3000/User';

    constructor(private http:HttpClient){

    }


getUsers(){
    return this.http.get<User[]>(this.baseUrl);
}
}
