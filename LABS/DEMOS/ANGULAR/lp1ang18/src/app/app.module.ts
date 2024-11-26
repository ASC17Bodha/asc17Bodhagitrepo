import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListUsersComponent } from "./list-users/list-users.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { RegistrationformComponent } from "./registrationform/registrationform.component";



@NgModule({
    declarations:[AppComponent,LoginComponent,ListUsersComponent,UpdateUserComponent,RegistrationformComponent],
    imports:[HttpClientModule,BrowserModule,RouterModule,AppRoutingModule,RouterOutlet,ReactiveFormsModule,CommonModule,FormsModule],
    bootstrap:[AppComponent] 
})
export class AppModule{

}