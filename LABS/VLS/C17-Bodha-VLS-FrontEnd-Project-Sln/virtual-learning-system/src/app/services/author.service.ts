// src/app/services/author.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private baseUrl = 'http://localhost:8080/api/authors'; // Update with backend URL

  constructor(private http: HttpClient) {}

  // Create a new author
  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}`, author);
  }

  // Get all authors
  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}`);
  }

  // Get author by ID
  getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/${id}`);
  }

  // Update an existing author
  updateAuthor(id: string, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}/${id}`, author);
  }

  // Delete an author
  deleteAuthor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
