import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserService } from './service/user-service';
import { User } from './model/user.model';

// interface FormData {
//   name: string;
//   emailid: string;
//   password: string;
//   address: string;
//   gender: string;
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Portfolio Registration';
  // formData: FormData = {
  //   name: '',
  //   emailid: '',
  //   password: '',
  //   address: '',
  //   gender: ''
  // };
  // savedData: FormData[] = [];

  // ngOnInit() {
  //   const localData = localStorage.getItem('formlocal');
  //   this.savedData = localData ? JSON.parse(localData) : [];
  // }

  // saveData(event: Event) {
  //   event.preventDefault();
    
  //   // Save form data to local storage
  //   this.savedData.push({ ...this.formData });
  //   localStorage.setItem('formlocal', JSON.stringify(this.savedData));

  //   // Reset form
  //   this.formData = { name: '', emailid: '', password: '', address: '', gender: '' };
  // }

  title='Project 1';
  users ?: User[];
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    console.log("asynchronously retrieving data from the server");
    this.userService.getUsers().subscribe(data=>this.users=data);
  }
}
