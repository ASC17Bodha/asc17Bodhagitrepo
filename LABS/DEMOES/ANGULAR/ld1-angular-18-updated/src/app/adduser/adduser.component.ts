import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent  {
  // addForm:FormGroup;
  // constructor(private formBuilder:FormBuilder,
  //   private userService: UserService){
  //     this.addForm=this.formBuilder.group({
  //       id:[Validators.required],
  //       name:[],
  //       salary:[]
  //     });
  //   }

}
