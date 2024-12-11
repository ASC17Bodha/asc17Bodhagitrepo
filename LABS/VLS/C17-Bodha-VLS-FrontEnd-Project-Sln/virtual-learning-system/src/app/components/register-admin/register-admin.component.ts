import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
})
export class RegisterAdminComponent {
  admin = { email: '', password: '', name: '', phone: '' };
  errorMessage = '';
  successMessage = '';

  constructor(private adminService: AdminService) {}

  register() {
    if (!this.admin.email || !this.admin.password || !this.admin.name || !this.admin.phone) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    this.adminService.registerAdmin(this.admin).subscribe(
      (response) => {
        this.successMessage = 'Admin registered successfully!';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Registration failed!';
        this.successMessage = '';
      }
    );
  }
}
