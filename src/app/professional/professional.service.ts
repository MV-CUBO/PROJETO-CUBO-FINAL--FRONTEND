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

  private readonly API_DOCTOR = "http://localhost:5000/api/doctor";
  private readonly API_USER = "http://localhost:5000/api/users";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createUserDoctor(userDoctor: UserDoctor): void {
    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
    };
    this.http.post(this.API_USER, userDoctor, httpOptions)
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
     this.http.post(this.API_DOCTOR, doctor, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }


}
