import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  // standalone: true,
  // imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  id:number=0;
  user: User = new User();
  constructor(private userservice:UserService, private route:ActivatedRoute,private router:Router){ }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user=new User();
    this.userservice.getUserById(this.id)
    .subscribe(searchUser=>{this.user=searchUser;},error=>console.log(error));
  }

  updateUser():void{
    this.userservice.updateUser(this.id,this.user)
    .subscribe(updatedUser=>{console.log(updatedUser)},error=>console.log(error));
    this.router.navigate(['/User'])

  }
}
