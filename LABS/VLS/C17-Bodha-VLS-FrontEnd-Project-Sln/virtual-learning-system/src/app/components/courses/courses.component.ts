import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  course: Course = {
    id: '',
    name: '',
    title: '',
    description: '',
    authorId: '',
    duration: 0,
    category: '',
  };
  editing: boolean = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  // Fetch all courses
  getCourses(): void {
    this.courseService.getAllCourses().subscribe((data) => (this.courses = data));
  }

  // Add a new course or update an existing one
  addCourse(): void {
    if (this.editing) {
      this.courseService.updateCourse(this.course.id, this.course).subscribe(() => {
        this.getCourses();
        this.resetForm();
      });
    } else {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.getCourses();
        this.resetForm();
      });
    }
  }

  // Edit a course
  editCourse(course: Course): void {
    this.course = { ...course };
    this.editing = true;
  }

  // Delete a course
  deleteCourse(id: string): void {
    this.courseService.deleteCourse(id).subscribe(() => this.getCourses());
  }

  // Reset the form
  resetForm(): void {
    this.course = {
      id: '',
      name: '',
      title: '',
      description: '',
      authorId: '',
      duration: 0,
      category: '',
    };
    this.editing = false;
  }
}
