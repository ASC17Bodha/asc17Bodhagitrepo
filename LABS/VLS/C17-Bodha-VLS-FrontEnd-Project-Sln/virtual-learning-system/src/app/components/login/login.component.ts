// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AdminService } from '../../services/admin.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// })
// export class LoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private adminService: AdminService, private router: Router) {}

//   login() {
//     if (!this.email || !this.password) {
//       this.errorMessage = 'Email and password are required!';
//       return;
//     }

//     this.adminService.login(this.email, this.password).subscribe(
//       (response) => {
//         console.log('Login successful', response);
//         this.router.navigate(['/courses']);
//       },
//       (error) => {
//         this.errorMessage = 'Invalid credentials!';
//       }
//     );
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required!';
      return;
    }

    if (this.email === 'nits@123.com' && this.password === '123') {
      console.log('Login successful');
      this.router.navigate(['/courses']);
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }
}
