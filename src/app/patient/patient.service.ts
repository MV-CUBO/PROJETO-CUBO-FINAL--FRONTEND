import { Patient, UserPatient } from './patient.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrlDoctor = "http://localhost:5000/api/patients";
  baseUrlUser = "http://localhost:5000/api/users";

  

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrlDoctor, patient)
  }

  createUser(user: UserPatient): Observable<UserPatient> {
    return this.http.post<UserPatient>(this.baseUrlUser, user)
  }

  
}
