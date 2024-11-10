import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder:FormBuilder,private router:Router){ }
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      Name:['admin',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      username:['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      salary:[''],
      email:['', [Validators.required,Validators.email]],
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    console.log('Form submitted successfully', this.registerForm.value)

  }
}
