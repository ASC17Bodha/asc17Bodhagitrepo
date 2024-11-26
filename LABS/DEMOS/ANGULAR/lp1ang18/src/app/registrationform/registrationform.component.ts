import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { RegistrationService } from '../service/registration.service';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-registrationform',
  // standalone: true,
  // imports: [],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent implements OnInit{
  registerForm:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private router:Router,private userservice:UserService,private registrationservice:RegistrationService){ }
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      Name:['admin',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      username:['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      salary:[''],
      // email:['', [Validators.required,Validators.email]],
    })
  }
  onSubmit(){
    this.submitted=true;
    const randomId=uuidv4();
    if(this.registerForm.invalid){
      return;
    }
    this.router.navigate(['/login'])
    console.log('Form submitted successfully', this.registerForm.value)
    const registrationdata={
      id:randomId,
      username:this.registerForm.value.username,
      password:this.registerForm.value.password,
    }
    const userdata={
      Name:this.registerForm.value.Name,
      salary:this.registerForm.value.salary,
      id:randomId,
    }
    this.userservice.createUser(userdata).subscribe(
      (response)=>{
        console.log('User created successfully',response)
      },
      (error)=>{
        console.log('Error creating user',error)
      }
    )
    this.registrationservice.addRegistration(registrationdata).subscribe(response=>{
      console.log('registered successfully',response)
    },
    (error)=>{
      console.log('Error creating user',error)
    }
  )
    
  }
} 
