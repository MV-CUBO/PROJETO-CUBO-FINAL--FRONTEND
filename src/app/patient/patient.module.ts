import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
  declarations: [PatientComponent, CreatePatientComponent],
  imports: [CommonModule, PatientRoutingModule],
})
export class PatientModule {}
