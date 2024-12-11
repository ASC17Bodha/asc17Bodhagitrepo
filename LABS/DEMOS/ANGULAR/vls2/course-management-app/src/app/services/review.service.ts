import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get(`${this.apiUrl}/reviews`);
  }

  getReview(id: string) {
    return this.http.get(`${this.apiUrl}/reviews/${id}`);
  }

  createReview(review: any) {
    return this.http.post(`${this.apiUrl}/reviews`, review);
  }

  updateReview(id: string, review: any) {
    return this.http.put(`${this.apiUrl}/reviews/${id}`, review);
  }

  deleteReview(id: string) {
    return this.http.delete(`${this.apiUrl}/reviews/${id}`);
  }
}