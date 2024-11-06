import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loginComponent } from './Login/login.component';
import { RegtableComponent } from './regtable/regtable.component';

const routes: Routes = [
  {path:'Login',component :loginComponent},
  {path:'Home',component:RegtableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
