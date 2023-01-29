import { Patient, UserPatient, Novo } from './patient.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrlPatient = "http://localhost:5000/api/patients";
  baseUrlUser = "http://localhost:5000/api/users";

  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  createUserPatient(userPatient: UserPatient): void {
    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
    };
    this.http.post(this.baseUrlUser, userPatient, httpOptions)
     .subscribe(res => {
       console.log(res);
     });
 }

  createNewPatient(patient: Patient): void {
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     };
     this.http.post(this.baseUrlPatient, patient, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }

  read(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrlPatient);
  }

  readById(id: string): Observable<Patient> {
    const url = `${this.baseUrlPatient}/${id}`
    return this.http.get<Patient>(url);
  }

  update(patient: Patient): Observable<Patient> {
    const url = `${this.baseUrlPatient}/${patient.id}`
    return this.http.put<Patient>(url, patient);
  }

  
}
