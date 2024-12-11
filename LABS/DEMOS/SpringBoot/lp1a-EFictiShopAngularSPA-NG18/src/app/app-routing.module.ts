import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { RegisterComponent } from "./register/register.component";
import { BeverageFormComponent } from "./e-reactive-forms/beverage-form/beverage-form.component";
import { AddempComponent } from "./addemp/addemp.component";

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'employees', component:ListEmpComponent, canActivate: [AuthGuardService]},
 {path:'update/:id', component:UpdateEmpComponent},
 {path:'register', component:RegisterComponent},
 {path: 'addemp', component:AddempComponent},
{path: 'beverage-form', component: BeverageFormComponent},
 {path: '**',component:LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // imports : [ BrowserModule,HttpClientModule],
    exports: [RouterModule],
 
})
export class AppRoutingModule {

}