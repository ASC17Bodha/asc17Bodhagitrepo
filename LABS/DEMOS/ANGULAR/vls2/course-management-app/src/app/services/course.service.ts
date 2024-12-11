import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  getCourse(id: string) {
    return this.http.get(`${this.apiUrl}/courses/${id}`);
  }

  createCourse(course: any) {
    return this.http.post(`${this.apiUrl}/courses`, course);
  }

  updateCourse(id: string, course: any) {
    return this.http.put(`${this.apiUrl}/courses/${id}`, course);
  }

  deleteCourse(id: string) {
    return this.http.delete(`${this.apiUrl}/courses/${id}`);
  }
}
