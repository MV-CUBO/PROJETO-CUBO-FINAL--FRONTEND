import { UserDoctor } from './professional.model';
import { Observable } from 'rxjs';
import { Professional } from './professional.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  baseUrlDoctor = "http://localhost:5000/api/doctor";
  baseUrlUser = "http://localhost:5000/api/users";



  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  getAll(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.baseUrlDoctor)
  }

  getDoctorId(id: string): Observable<Professional>{
    const URL = `${this.baseUrlDoctor}/${id}`;
    return this.http.get<Professional>(URL)
  }
  deleteDoctorId(id: string): Observable<Professional>{
    const URL = `${this.baseUrlDoctor}/${id}`;
    return this.http.delete<Professional>(URL)
  }


  createUserDoctor(userDoctor: UserDoctor): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrlUser, userDoctor, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }

  createNewProfessional(doctor: Professional): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrlDoctor, doctor, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }

  read(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.baseUrlDoctor);
  }

  readById(id: string): Observable<Professional> {
    const url = `${this.baseUrlDoctor}/${id}`
    return this.http.get<Professional>(url);
  }

  update(professional: Professional): Observable<Professional> {
    const url = `${this.baseUrlDoctor}/${professional.id}`
    return this.http.put<Professional>(url, professional);
  }
  
}
