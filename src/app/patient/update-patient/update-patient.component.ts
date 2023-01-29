import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './../patient.service';
import { EstadoCivil, Genero, Patient, UserPatient } from './../patient.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit{

    formCadastro!: FormGroup;
    ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id!).subscribe(patient => {
      this.patient = patient
    });

    this.formCadastro = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['',[Validators.required]],
      maritalStatus: ['', [Validators.required]],
      insuranceCompany: ['', [Validators.required]],
      healthInsurenceCard: ['', [Validators.required]],
      observation: [''],
      zipCode: ['', [Validators.required]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      district: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      complements: ['']
      });

      
    
  }

  constructor(
    private service: PatientService, 
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ){}

  updatePatient(): void{
    this.service.update(this.patient).subscribe(() => {
      this.service.showMessage('Paciente atualizado com sucesso!');
      this.router.navigate(["/admin"]);
    })
  }

  cancel(): void{
    this.router.navigate(["/admin"])
  }

  patient: Patient = {
    name: '',
    cpf: "",
    dateOfBirth: '',
    phone: '',
    email: '',
    gender: '',
    maritalStatus: '',
    insuranceCompany: '',
    healthInsurenceCard: '',
    observation: '',
    address: {
      zipCode: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      complements: ''
    }
  }

  userPatient: UserPatient = {
    username: '',
    password: '',
    role: ['ROLE_PATIENT']
  }

  generos: Genero[] = [
    {value: 'MALE', viewValue: 'Masculino'},
    {value: 'FEMALE', viewValue: 'Feminino'},
  ];

  estadoCivil: EstadoCivil[] = [
    {value: 'SINGLE', viewValue: 'Solteiro(a)'},
    {value: 'MARRIED', viewValue: 'Casado(a)'},
    {value: 'DIVORCED', viewValue: 'Divorciado(a)'},
  ];
}
