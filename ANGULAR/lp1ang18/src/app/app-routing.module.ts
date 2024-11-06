import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes=[
    // {path:'welcome',component:AppComponent},
    {path:'', component:LoginComponent},
    {path:'User',component:ListUsersComponent}

]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{
}