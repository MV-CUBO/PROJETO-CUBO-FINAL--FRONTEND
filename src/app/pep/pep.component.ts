import { Component } from '@angular/core';
import { Pep } from './pep';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.css']
})
export class PepComponent {
  pep: Pep = {
    pepNumber: '',
    patientId: '',
    doctorId:'',
    status:'',
    prescription:'',
    bloodType:'',
    allergies:'',
  }
}
