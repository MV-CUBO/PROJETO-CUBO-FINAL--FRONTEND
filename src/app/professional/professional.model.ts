import { Address } from './../patient/patient.component';


export interface Professional {
    id?: string
    name: string
    cpf: string
    address: Address,
    dateOfBirth: Date
    phone: string
    email: string
    password: string
    gender: string
    maritalStatus: string
    crm: string
    specialty: string
}

export interface UserProfessional {
    username: string
    password: string
}

export interface Genero {
    value: string;
    viewValue: string;
  }
  
export interface EstadoCivil{
    value: string;
    viewValue: string;
  }