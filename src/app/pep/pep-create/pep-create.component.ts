import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PepCreate } from '../pep';
import { PepService } from '../pep.service';


@Component({
  selector: 'app-pep-create',
  templateUrl: './pep-create.component.html',
  styleUrls: ['./pep-create.component.css']
})


export class PepCreateComponent {
  pep: PepCreate = {
    patient_id: '',
    doctor_id: '',
    status: '',
    prescription: '',
    observation: ''
  }
  
  constructor(private service: PepService, private router: Router){}

  ngOninit(): void {
  }
  
  send(){
    this.service.createPep(this.pep).subscribe(() => {
      this.router.navigate(['/admin/listapep'])
    });
  }


}
