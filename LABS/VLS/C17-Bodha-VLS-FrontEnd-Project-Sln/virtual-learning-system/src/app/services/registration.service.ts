// src/app/services/registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/registrations'; // Update with backend URL

  constructor(private http: HttpClient) {}

  // Create a new registration
  createRegistration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(`${this.baseUrl}`, registration);
  }

  // Get all registrations
  getAllRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.baseUrl}`);
  }

  // Get registration by ID
  getRegistrationById(id: string): Observable<Registration> {
    return this.http.get<Registration>(`${this.baseUrl}/${id}`);
  }

  // Update an existing registration
  updateRegistration(id: string, registration: Registration): Observable<Registration> {
    return this.http.put<Registration>(`${this.baseUrl}/${id}`, registration);
  }

  // Delete a registration
  deleteRegistration(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
