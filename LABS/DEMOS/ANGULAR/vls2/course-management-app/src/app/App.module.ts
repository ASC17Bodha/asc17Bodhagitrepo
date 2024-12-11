import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { AuthorsComponent } from "./authors/authors.component";
import { LearnersComponent } from "./learners/learners.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    LearnersComponent,
    ReviewsComponent
  ],
  imports: [ BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,AppRoutingModule],

  bootstrap: [ AppComponent ]
})
export class AppModule { }