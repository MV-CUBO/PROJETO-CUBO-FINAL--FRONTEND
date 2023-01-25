import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pep } from './pep';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'prontuariomedico';
  pep: Pep = {
    patient_id: '',
    doctor_id: '',
    status: '',
    prescription: '',

  };


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  createPep() { 
    alert(this.pep);
  }
}