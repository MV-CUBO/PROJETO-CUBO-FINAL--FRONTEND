import { Component, OnInit } from '@angular/core';
import { Pep } from './pep';
import { PepService } from './pep.service';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss']
})
export class PepComponent implements OnInit {
    pep: Pep = {
    id: '',
    pepNumber: '',
    patientId: '',
    doctorId: '',
    status: '',
    prescription: '',
    bloodType: '',
    allergies: '',
  }

  constructor(private service: PepService) { }

  ngOnInit() {
    this.getPep();
  }

  getPep() {
    this.service.getAll().subscribe((res) => {
      this.pep = res[0];
      this.pep.createdAt = new Date(res[0].createdAt).toLocaleString('pt-BR');
      this.pep.updateAt = new Date(res[0].updateAt).toLocaleString('pt-BR');
    })
  }

}
