import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pep } from './pep';

export interface Patient{
   name: string,
}

@Injectable({
  providedIn: 'root'
})
export class PepService {

  private readonly API = 'http://localhost:5000/api/pep'
  private readonly API_PATIENT = 'http://localhost:5000/api/patients'
  private readonly API_DOCTOR = 'http://localhost:5000/api/doctor'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pep[]> {
    return this.http.get<Pep[]>(this.API)
  }

  getPatientId(id: string): Observable<Patient>{
    const URL = `${this.API_PATIENT}/${id}`;
    return this.http.get<Patient>(URL)
  }
  getDoctorId(id: string): Observable<Patient>{
    const URL = `${this.API_DOCTOR}/${id}`;
    return this.http.get<Patient>(URL)
  }

}