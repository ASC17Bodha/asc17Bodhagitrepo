import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  // standalone: true,
  // imports: [],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  employee:Employee=new Employee();
  // private static count:number=5; 
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    console.log("AddempComponent constructor called");
  }
  onSubmit(){
    // this.employee.id=AddempComponent.count++;
     this.employeeService.createEmployee(this.employee).subscribe({
      next:(response)=>{
        console.log('Employee added:',response);
        this.router.navigate(['/employees']);
      },
        error:(error)=>{
          console.log('Error adding employee:',error);
        }
     });

  }

}
