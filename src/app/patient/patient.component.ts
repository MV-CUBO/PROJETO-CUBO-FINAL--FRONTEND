import { Component } from '@angular/core';

export interface Novo {
  nome: string,
  idade: string
}

export interface Address {
  id?: string
  zipCode: string
  street: string
  number: string
  district: string
  city: string
  state: string
  complements: string
}

export interface Patient {
  id?: string
  name: string
  cpf: string
  address: Address
  dateOfBirth: Date
  phone: string
  email: string
  gender: string
  maritalStatus: string
  insuranceCompany: string
  healthInsurenceCard: string
  observation: string
}

export interface UserPatient {
  username: string
  password: string
  role: string
}

export interface Genero {
  value: string;
  viewValue: string;
}

export interface EstadoCivil{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {}
