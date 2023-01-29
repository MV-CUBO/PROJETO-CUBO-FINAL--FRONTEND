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
  dateOfBirth: string
  phone: string
  email: string
  gender: string
  maritalStatus: string
  insuranceCompany: string
  healthInsurenceCard: string
  observation: string
}

export interface User{
  username: string
  password: string
  role: string[]
}

export interface Gender {
  value: string;
  viewValue: string;
}

export interface CivilState {
  value: string;
  viewValue: string;
}
