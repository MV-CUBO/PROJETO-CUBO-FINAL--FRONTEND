import { Component } from '@angular/core';

export interface Patient {
  id?: number
  name: string
  cpf: string
  dateOfBirth: Date
  phone: string
  email: string
  password: string
  gender: string
  maritalStatus: string
  insuranceCompany: string
  healtInsurenceCard: string
  observation: string
  zipcode: string
  street: string
  number: string
  district: string
  city: string
  state: string
  complements: string
}

export interface UserPatient {
  username: string
  password: string
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {}
