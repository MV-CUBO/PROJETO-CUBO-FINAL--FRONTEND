import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  FindByGender(gender: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/patients/count/gender?gender=${gender}`)
  }
  FindPatientsByStatus(value: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/patients/count/status?status=${value}`)
  }
  FindByStatusPep(status: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/pep/status/${status}/count`)
  }
  FindDoctorByStatus(value: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/doctor/count/status?status=${value}`)
  }
}

