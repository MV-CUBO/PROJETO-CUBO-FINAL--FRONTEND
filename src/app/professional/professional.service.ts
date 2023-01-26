import { UserProfessional } from './userProfessional.model';
import { Observable } from 'rxjs';
import { Professional } from './professional.model';
import { HttpClient } from '@angular/common/http';
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
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(professional: Professional): Observable<Professional> {
    return this.http.post<Professional>(this.baseUrlDoctor, professional)
  }

  createUser(user: UserProfessional): Observable<UserProfessional> {
    return this.http.post<UserProfessional>(this.baseUrlUser, user)
  }
}
