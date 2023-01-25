import { Component } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  title = 'prontuariomedico'
  patient : Patient = {
    insuranceCompany: '',
    healthInsurenceCard: '',
    bloodType: '',
    observation: '',
    status: '',
 
  };

  createPatient() { 
    alert(this.patient);
  }


}