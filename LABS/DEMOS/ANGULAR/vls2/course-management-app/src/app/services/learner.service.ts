import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearnerService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getLearners() {
    return this.http.get(`${this.apiUrl}/learners`);
  }

  getLearner(id: string) {
    return this.http.get(`${this.apiUrl}/learners/${id}`);
  }

  createLearner(learner: any) {
    return this.http.post(`${this.apiUrl}/learners`, learner);
  }

  updateLearner(id: string, learner: any) {
    return this.http.put(`${this.apiUrl}/learners/${id}`, learner);
  }

  deleteLearner(id: string) {
    return this.http.delete(`${this.apiUrl}/learners/${id}`);
  }
}