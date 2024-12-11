import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./components/login/login.component";

import { HttpClientModule } from "@angular/common/http";
import { RegisterAdminComponent } from "./components/register-admin/register-admin.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { LearnersComponent } from "./components/learners/learners.component";

//what are declarations?
//decelarations are components, directives, pipes.
//what are imports?
//imports are other modules that are required by this module.
//what are providers?
//providers are services that are provided by this module.
//what are bootstrap?
//bootstrap is the root component of the application.


@NgModule({
    declarations: [AppComponent,RegisterAdminComponent,LoginComponent,CoursesComponent,LearnersComponent],
    imports: [BrowserModule,RouterModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
    bootstrap: [AppComponent]
})
export class  AppModule{
    constructor(){
        console.log("AppModule constructor");
    }
}