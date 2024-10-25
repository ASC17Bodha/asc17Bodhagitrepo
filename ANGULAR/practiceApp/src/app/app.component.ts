import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[FormsModule,CommonModule],
  standalone:true
})
export class AppComponent {
  formData = {
    name: '',
    emailid: '',
    password: '',
    address: '',
    gender: ''
  };
  
  users: Array<any> = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Load data only if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadData();
    }
  }

  // Method to save data
  saveData(event: Event): void {
    event.preventDefault();
    
    // Create a new user object from form data
    const user = { ...this.formData };

    // Add user to users array
    this.users.push(user);
    
    // Save to local storage
    this.saveToLocalStorage(user);
    
    // Reset the form
    this.resetForm();
  }

  // Reset the form fields
  resetForm(): void {
    this.formData = { name: '', emailid: '', password: '', address: '', gender: '' };
  }

  // Load saved data from local storage
  loadData(): void {
    const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    this.users = savedData;
  }

  // Save user data to local storage
  saveToLocalStorage(user: any): void {
    const savedData = JSON.parse(localStorage.getItem('formlocal') || '[]');
    savedData.push(user);
    localStorage.setItem('formlocal', JSON.stringify(savedData));
  }
}
