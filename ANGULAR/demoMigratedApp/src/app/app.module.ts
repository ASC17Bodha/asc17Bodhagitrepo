import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginComponent } from './Login/login.component';
import { RegtableComponent } from './regtable/regtable.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })



@NgModule({
  declarations: [AppComponent,loginComponent,RegtableComponent],
  imports:[BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
