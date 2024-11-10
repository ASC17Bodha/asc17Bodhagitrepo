import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  // standalone: true,
  // imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  users:User[];
  userService:UserService;
  searchinp:number;
  searchedusers:User[];
  constructor(userService:UserService,private router:Router){
    this.userService=userService;
  }
ngOnInit(): void {
  this.userService.getUser().subscribe((userdata)=>{this.users=userdata;})
}

deleteUser(id:number){  
  if(id!==undefined){
    this.userService.deleteUser(id).subscribe(()=>
      this.users=this.users.filter(user=>user.id!=id))
  }
}

updateUser(id:number|undefined):void{
  if(id!==undefined){
    this.router.navigate(['update',id]);
  }
}
searchUser(){
  this.userService.getUser().subscribe((emp)=>{
    this.searchedusers=emp.filter(emp=>emp.id==this.searchinp)
  })
}
logut(){
  sessionStorage.setItem("loggedIn","no");
  this.router.navigate(["/"]);
}
}