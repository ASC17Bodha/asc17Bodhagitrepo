import { Component } from '@angular/core';
import { Issue } from '../models/issues.model';
import { IssueService } from '../services/issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listissues',
  // standalone: true,
  // imports: [],
  templateUrl: './listissues.component.html',
  styleUrl: './listissues.component.css'
})
export class ListissuesComponent {
  issues:Issue[];
  issueService:IssueService;
  searchinp:number;
  searchedIssues:Issue[];
  constructor(issueService:IssueService,private router:Router){
    this.issueService=issueService;
  }
ngOnInit(): void {
  this.issueService.getIssues().subscribe((Issuedata)=>{this.issues=Issuedata;})
}

deleteIssue(id:number){  
  if(id!==undefined){
    this.issueService.deleteIssue(id).subscribe(()=>
      this.issues=this.issues.filter(issue=>issue.issueId!=id))
  }
}

updateIssue(id:number|undefined):void{
  if(id!==undefined){
    this.router.navigate(['/update',id]);
  }
}
searchIssue(){
  this.issueService.getIssues().subscribe((emp)=>{
    this.searchedIssues=emp.filter(emp=>emp.issueId==this.searchinp)
  })
}
logut(){
  sessionStorage.setItem("loggedIn","no");
  this.router.navigate(["/"]);
}
addIssue(){
  this.router.navigate(['/addissue']);
}
}
