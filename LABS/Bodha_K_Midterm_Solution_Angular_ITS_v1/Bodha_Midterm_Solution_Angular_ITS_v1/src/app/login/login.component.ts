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
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    const username:string=this.loginForm.get("username").value;
    const password:string=this.loginForm.get("password").value;
    this.router.navigate(["/Issues"]);
    
    if(username==="nits"&&password==="nits"){
      this.router.navigate(["/Issues"]);
        console.log("login success");
        sessionStorage.setItem("loggedIn","yes");
    }
    else console.log("login unsuccessful");
}
}
