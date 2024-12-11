import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LearnersComponent } from './components/learners/learners.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register-admin', component: RegisterAdminComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'learners', component: LearnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
