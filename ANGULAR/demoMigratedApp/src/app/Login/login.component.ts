import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class loginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {

    this.loginform = this.formbuilder.group({
      Id: new FormControl(''),
      pass: new FormControl('')
    });
  }

  ngOnInit(): void {
  
  }

  handleSubmit() {
    const id = this.loginform.get('Id')?.value;
    const pass = this.loginform.get('pass')?.value;
    alert(`Form submitted with Id: ${id}, Password: ${pass}`);
  }
}










// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class loginComponent {

//     loginform = new FormGroup=({
//         Id : new FormControl(''),
//         pass : new FormControl(''),
//     });
//     handleSubmit(){
//         alert("Form submitted with ", this.loginform.value.Id"," this.loginform.value.pass);
//     }

// }
// constructor(private formbuilder:FormBuilder,private router:Router){
    
// }
// ngOnInit(): void {
//     this.loginform=this.formbuilder.group({
//         id: ['teddy'],
//         password: [' ']
//     })
// }