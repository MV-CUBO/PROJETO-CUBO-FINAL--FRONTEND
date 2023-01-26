import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL = 'http://localhost:5000/api:'
  
   constructor(private http:HttpClient) { }

  FindByGender(gender:string): Observable<number>{
    return this.http.get<number>(`${this.baseURL}/patients/count/gender?gender=${gender}`)
  }
  FindByStatusPep(status:string): Observable<number>{
    return this.http.get<number>(`${this.baseURL}/pep/status/${status}/count`)
  }
}

