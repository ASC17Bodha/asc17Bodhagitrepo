import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user-service'; 
import { ApphomeComponent } from '../apphome/apphome.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { User } from '../model/user.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule,ApphomeComponent,RouterModule,RouterOutlet,RouterLink,RouterLinkActive],
  standalone: true
})
export class portfolio implements OnInit {
  formData: User = {
    id: 0,
    name: '',
    emailid: '',
    password: '',
    address: '',
    gender: ''
  };
  
  users: Array<User> = [];
  searchResults: Array<User> = [];
  searchQuery: string = '';
  isUpdating: boolean = false;

  constructor(private userservice: UserService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadData();
    }
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      localStorage.setItem('formlocal', JSON.stringify(this.users));
    });
  }

  saveData(event: Event): void {
    event.preventDefault();
    
    if (this.isUpdating) {
      this.updateUser(this.formData);
    } else {
      const newUser = { ...this.formData };
      this.userservice.createUser(newUser).subscribe(data => {
        this.users.push(data);
        this.saveToLocalStorage(data);
        this.resetForm();
      });
    }
  }

  updateUser(user: User): void {
    this.userservice.updateUser(user).subscribe(updatedUser => {
      const index = this.users.findIndex(u => u.id === user.id);
      if (index > -1) {
        this.users[index] = updatedUser;
        this.updateLocalStorage(updatedUser);
        this.resetForm();
        this.isUpdating = false;
      }
    });
  }

  deleteUser(id: number): void {
    this.userservice.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      this.deleteFromLocalStorage(id);
    });
  }

  searchUser(): void {
    this.searchResults = this.users.filter(user => 
      user.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  

  resetForm(): void {
    this.formData = { id: 0, name: '', emailid: '', password: '', address: '', gender: '' };
    this.isUpdating = false;
  }

  loadData(): void {
    const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    this.users = savedData;
  }

  saveToLocalStorage(user: User): void {
    const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    savedData.push(user);
    localStorage.setItem('formlocal', JSON.stringify(savedData));
  }

  updateLocalStorage(user: User): void {
    const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    const index = savedData.findIndex((u: User) => u.id === user.id);
    if (index > -1) {
      savedData[index] = user;
      localStorage.setItem('formlocal', JSON.stringify(savedData));
    }
  }

  deleteFromLocalStorage(id: number): void {
    let savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    savedData = savedData.filter((user: User) => user.id !== id);
    localStorage.setItem('formlocal', JSON.stringify(savedData));
  }

  populateForm(user: User): void {
    this.formData = { ...user };
    this.isUpdating = true;
  }
}





























// import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { User } from './model/user.model';
// import { HttpClient,  } from '@angular/common/http';
// import { provideHttpClient } from '@angular/common/http';
// import { UserService } from './service/user-service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports:[FormsModule,CommonModule,ReactiveFormsModule],
//   standalone:true
// })
// export class AppComponent implements OnInit {
//   formData:User = {
//     id: 1 ,
//     name: '',
//     emailid: '',
//     password: '',
//     address: '',
//     gender: ''
//   };

  
//   // formData?:User;
//   // users1?: User[];

//   users: Array<User> = [];

  

//   constructor(private userservice:UserService, @Inject(PLATFORM_ID) private platformId: Object) {
//     // Load data only if running in the browser
//     if (isPlatformBrowser(this.platformId)) {
//       this.loadData();
      
//     }
//   }

//   ngOnInit(){
//     this.userservice.getUsers().subscribe(data=>this.users=data);
//   }

//   // Method to save data
//   saveData(event: Event): void {
//     event.preventDefault();
    
//     // Create a new user object from form data
//     const user = { ...this.formData };
    
//     // Add user to users array
//     this.users.push(user);
    
//     this.userservice.createUser(user).subscribe(user=>this.users.push(user));
//     // Save to local storage
//     this.saveToLocalStorage(user);
    
//     // Reset the form
//     this.resetForm();
//   }
  
//   // Reset the form fields
//   resetForm(): void {
//     this.formData = { id:0 ,name: '', emailid: '', password: '', address: '', gender: '' };
//   }
  
//   // Load saved data from local storage
//   loadData(): void {
//     const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
//     this.users = savedData;
//   }
  
//   // Save user data to local storage
//   saveToLocalStorage(user: any): void {
//     const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
//     savedData.push(user);
//     localStorage.setItem('formlocal', JSON.stringify(savedData));
//   }
//   deleteuser(id:number){
//     this.userservice.deleteUser(id);
//   }
// }













// import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { UserService } from './service/user-service';
// import { User } from './model/user.model';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports:[FormsModule,CommonModule],
//   standalone:true
// })
// export class AppComponent  {
//   formData = {
//     name: '',
//     emailid: '',
//     password: '',
//     address: '',
//     gender: ''
//   };

  
  
//   users: Array<any> = [];
  
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
//     // Load data only if running in the browser
//     if (isPlatformBrowser(this.platformId)) {
//       this.loadData();
//     }
//   }

//   // users?:User[];
//   // ngOnInit(){
//   //   this.userservice.getUsers().subscribe(data=>this.users=data);
//   // }

//   // Method to save data
//   saveData(event: Event): void {
//     event.preventDefault();
    
//     // Create a new user object from form data
//     const user = { ...this.formData };

//     // Add user to users array
//     this.users.push(user);
    
//     // Save to local storage
//     this.saveToLocalStorage(user);
    
//     // Reset the form
//     this.resetForm();
//   }

//   // Reset the form fields
//   resetForm(): void {
//     this.formData = { name: '', emailid: '', password: '', address: '', gender: '' };
//   }

//   // Load saved data from local storage
//   loadData(): void {
//     const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
//     this.users = savedData;
//   }

//   // Save user data to local storage
//   saveToLocalStorage(user: any): void {
//     const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
//     savedData.push(user);
//     localStorage.setItem('formlocal', JSON.stringify(savedData));
//   }
// }
