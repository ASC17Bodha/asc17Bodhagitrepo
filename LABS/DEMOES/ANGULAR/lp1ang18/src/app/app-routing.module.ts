import {Component, NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuardService } from './service/authguard.service';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes=[
    // {path:'welcome',component:AppComponent},
    {path:'', component:LoginComponent},
    {path:'User',component:ListUsersComponent, canActivate:[AuthGuardService]},
    {path:'update/:id',component:UpdateUserComponent},
    {path:'Register',component:RegistrationformComponent},
    {path:'**',component:LoginComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{
}