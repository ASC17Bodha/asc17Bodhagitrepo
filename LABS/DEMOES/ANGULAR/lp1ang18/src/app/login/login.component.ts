import { CommonModule } from '@angular/common';
import {Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit{
    loginForm:FormGroup;
    constructor(private formBuilder:FormBuilder,private router:Router){}
    
    ngOnInit():void {
        this.loginForm=this.formBuilder.group({
            loginid:["teddy"],
            password:[]
        });
    }
    onSubmit(){
        console.log(this.loginForm.value);
        const loginid:string=this.loginForm.get("loginid").value;
        const password:string=this.loginForm.get("password").value;

        if(loginid==="teddy"&&password==="teddy"){
            console.log("login success");
            sessionStorage.setItem("loggedIn","yes");
            this.router.navigate(["/User"]);
        }
        else console.log("login unsuccessful");
    }
}