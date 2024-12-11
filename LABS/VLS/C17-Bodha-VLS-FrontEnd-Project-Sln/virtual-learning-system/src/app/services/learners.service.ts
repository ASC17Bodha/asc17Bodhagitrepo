// src/app/services/learner.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learner } from '../models/learner.model';

@Injectable({
  providedIn: 'root',
})
export class LearnerService {
  private baseUrl = 'http://localhost:8080/api/learners'; // Update with backend URL

  constructor(private http: HttpClient) {}

  // Create a new learner
  createLearner(learner: Learner): Observable<Learner> {
    return this.http.post<Learner>(`${this.baseUrl}`, learner);
  }

  // Get all learners
  getAllLearners(): Observable<Learner[]> {
    return this.http.get<Learner[]>(`${this.baseUrl}`);
  }

  // Get learner by ID
  getLearnerById(id: string): Observable<Learner> {
    return this.http.get<Learner>(`${this.baseUrl}/${id}`);
  }

  // Update an existing learner
  updateLearner(id: string, learner: Learner): Observable<Learner> {
    return this.http.put<Learner>(`${this.baseUrl}/${id}`, learner);
  }

  // Delete a learner
  deleteLearner(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
