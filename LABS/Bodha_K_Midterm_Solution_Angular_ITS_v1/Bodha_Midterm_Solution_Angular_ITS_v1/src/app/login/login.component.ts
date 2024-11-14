import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router, private formbuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username:['nits'],
      password:[]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    const username1:string=this.loginForm.get("username").value;
    const password1:string=this.loginForm.get("password").value;
    // this.router.navigate(["/Issues"]);
    
    if(username1==="nits"&&password1==="nits"){
      this.router.navigate(["/Issues"]);
        console.log("login success");
        sessionStorage.setItem("loggedIn","yes");
    }
    else console.log("login unsuccessful",username1,password1);
}
}
