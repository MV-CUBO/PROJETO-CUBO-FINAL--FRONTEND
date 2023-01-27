import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient, UserPatient } from '../patient.component';
import { Router } from '@angular/router';

interface Genero {
  value: string;
  viewValue: string;
}

interface EstadoCivil{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit{
  formCadastro!: FormGroup;

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    gender: ['',[Validators.required]],
    maritalStatus: ['', [Validators.required]],
    insuranceCompany: ['', [Validators.required]],
    healtInsurenceCard: ['', [Validators.required]],
    observation: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    district: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    complements: ['', [Validators.required]]
    });
  }

  patient: Patient = {
    name: '',
    cpf: "",
    dateOfBirth: new Date(),
    phone: '',
    email: '',
    password: "",
    gender: '',
    maritalStatus: '',
    insuranceCompany: '',
    healtInsurenceCard: '',
    observation: '',
    zipcode: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    complements: ''
  }

  user: UserPatient = {
    username: '',
    password: ''
  }

  constructor(private patientService: PatientService,
    private router: Router, private formBuilder: FormBuilder) {}

  createPatient(): void {
    this.patientService.create(this.patient);
    this.patientService.createUser(this.user)
    this.patientService.showMessage("Cadastrado com sucesso!");
    console.log(this.patient);
  }


  cancel(): void {
    this.router.navigate(['/login'])
  }

  dataSelecionada: Date = new Date();
  nome!: string;
    
  

  generos: Genero[] = [
    {value: 'MALE', viewValue: 'Masculino'},
    {value: 'FEMALE', viewValue: 'Feminino'},
  ];

  estadoCivil: EstadoCivil[] = [
    {value: 'SINGLE', viewValue: 'Solteiro(a)'},
    {value: 'MARRIED', viewValue: 'Casado(a)'},
    {value: 'WIDOVER', viewValue: 'Viuvo(a)'},
    {value: 'DIVORCED', viewValue: 'Divorciado(a)'},
  ];

}
