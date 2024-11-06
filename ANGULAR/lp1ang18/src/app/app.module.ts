import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListUsersComponent } from "./list-users/list-users.component";



@NgModule({
    declarations:[AppComponent,LoginComponent,ListUsersComponent],
    imports:[HttpClientModule,BrowserModule,RouterModule,AppRoutingModule,RouterOutlet,ReactiveFormsModule,CommonModule],
    bootstrap:[AppComponent] 
})
export class AppModule{

}