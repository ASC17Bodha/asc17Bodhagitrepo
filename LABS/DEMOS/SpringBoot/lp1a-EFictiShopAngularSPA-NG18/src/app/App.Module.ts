import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { AddempComponent } from "./addemp/addemp.component";

@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ListEmpComponent,
        UpdateEmpComponent,
        AddempComponent
    ],
    imports:[BrowserModule,HttpClientModule,AppRoutingModule,FormsModule,ReactiveFormsModule],
    bootstrap:[AppComponent]
})

export class AppModule { }