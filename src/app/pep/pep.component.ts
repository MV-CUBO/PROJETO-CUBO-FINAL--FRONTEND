import { Component, OnInit } from '@angular/core';
import { Pep } from './pep';
import { PepService } from './pep.service';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.css']
})
export class PepComponent implements OnInit {
  id: string = '';
  pep: Pep = {
    pepNumber: '',
    patientId: '',
    doctorId:'',
    status:'',
    prescription:'',
    bloodType:'',
    allergies:'',
  }

  constructor(private service: PepService){}

  ngOnInit(){
    this.getPep(this.id);
  }

  getPep(id: string){
    this.service.getPepId(id).subscribe((res) => {this.pep = res;})
  }



}
