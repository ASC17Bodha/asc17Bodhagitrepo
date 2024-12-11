import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get(`${this.apiUrl}/authors`);
  }

  getAuthor(id: string) {
    return this.http.get(`${this.apiUrl}/authors/${id}`);
  }

  createAuthor(author: any) {
    return this.http.post(`${this.apiUrl}/authors`, author);
  }

  updateAuthor(id: string, author: any) {
    return this.http.put(`${this.apiUrl}/authors/${id}`, author);
  }

  deleteAuthor(id: string) {
    return this.http.delete(`${this.apiUrl}/authors/${id}`);
  }
}