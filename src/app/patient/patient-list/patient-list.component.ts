import { Component, InjectionToken, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent 
  implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    listpatient!: "listapacientes";
    displayedColumns: string[] = ['pepNumber', 'patientId', 'doctorId'];
    dataSource: any;
    listPatientData: any[] = [];
  
    }