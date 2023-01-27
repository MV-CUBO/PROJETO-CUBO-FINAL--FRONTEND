import { Component } from '@angular/core';
import {Pep} from './pep-create'

@Component({
  selector: 'app-pep-create',
  templateUrl: './pep-create.component.html',
  styleUrls: ['./pep-create.component.css']
})


export class PepCreateComponent {
  title = 'pepecreate';
  pep: Pep = {
    patient_id: '',
    doctor_id: '',
    status: '',
    prescription: '',
    observation: ''
  }
  

  ngOninit(): void {}

  createPep(){
    alert(this.pep)
  }


}
