// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses'; // Update with backend URL

  constructor(private http: HttpClient) {}

  // Create a new course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}`, course);
  }

  // Get all courses
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  // Get course by ID
  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  // Update an existing course
  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  // Delete a course
  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
