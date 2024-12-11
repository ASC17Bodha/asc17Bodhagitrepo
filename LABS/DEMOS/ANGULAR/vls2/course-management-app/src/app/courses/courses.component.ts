import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // courses: any[] = [];
  courses: Course[] = [];
  selectedCourse: any | null = null;
  error: string | null = null;
  courseForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
        this.error = null;
      },      error => {
        console.error('Error fetching courses', error);
        this.error = 'Failed to load courses. Please try again later.';
      }
    );
  }

  onSelect(course: any) {
    this.selectedCourse = course;
  }

  createCourse() {
    if (this.courseForm.valid) {
      const newCourse = {
        ...this.courseForm.value,
        id: Date.now().toString()
      };
      this.courseService.createCourse(newCourse).subscribe(
        () => {
          this.fetchCourses();
          this.courseForm.reset();
          this.selectedCourse = null;
        },
        error => {
          console.error('Error creating course', error);
          this.error = 'Failed to create course. Please try again.';
        }
      );
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }

  updateCourse() {
    if (!this.selectedCourse || !this.courseForm.valid) {
      this.error = 'Please select a course to update and ensure all fields are filled.';
      return;
    }
    
    const updatedCourse = {
      ...this.selectedCourse,
      ...this.courseForm.value
    };

    this.courseService.updateCourse(this.selectedCourse.id, updatedCourse).subscribe(
      () => {
        this.fetchCourses();
        this.courseForm.reset();
        this.selectedCourse = null;
      },
      error => {
        console.error('Error updating course', error);
        this.error = 'Failed to update course. Please try again.';
      }
    );
  }

  deleteCourse() {
    if (!this.selectedCourse) {
      this.error = 'Please select a course to delete.';
      return;
    }

    this.courseService.deleteCourse(this.selectedCourse.id).subscribe(
      () => {
        this.fetchCourses();
        this.courseForm.reset();
        this.selectedCourse = null;
      },
      error => {
        console.error('Error deleting course', error);
        this.error = 'Failed to delete course. Please try again.';
      }
    );
  }

  onFormSubmit() {
    if (!this.selectedCourse) {
      this.createCourse();
    } else {
      this.updateCourse();
    }
  }
}
