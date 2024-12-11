import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { AuthorsComponent } from "./authors/authors.component";
import { LearnersComponent } from "./learners/learners.component";
import { ReviewsComponent } from "./reviews/reviews.component";



const routes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'learners', component: LearnersComponent },
    { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }