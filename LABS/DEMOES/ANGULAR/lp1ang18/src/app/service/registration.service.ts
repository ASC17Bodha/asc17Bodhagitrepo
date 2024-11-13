import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Registration } from "../model/user.model";
import { Observable,map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService{
    baseUrl:string='http://localhost:3000/Registration';
    constructor(private httpclient:HttpClient){}
    getAllRegistrations(){
        return this.httpclient.get<Registration[]>(this.baseUrl);
    }
    getRegistrationsById(id:number){
        return this.httpclient.get<Registration>(this.baseUrl+'/'+id);
    }
    addRegistration(registration:Registration){
        return this.httpclient.post<Registration>(this.baseUrl,registration);
    }
    updateRegistration(id:number,registration:Registration){
        return this.httpclient.put<Registration>(this.baseUrl+'/'+id,registration);
    }
    deleteRegistration(id:number){
        return this.httpclient.delete<Registration>(this.baseUrl+'/'+id);
    }
    getNextId(): Observable<number>{
        return this.httpclient.get<Registration[]>(this.baseUrl).pipe(
            map(logins => {
                const maxId = Math.max(...logins.map(login => login.id),0);
                return maxId+1;
            })
        )
    }
}