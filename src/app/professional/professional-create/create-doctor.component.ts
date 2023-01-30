import { Especialidade, EstadoCivil, Genero, Professional, UserDoctor } from './../professional.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-professional',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})

export class CreateDoctorComponent implements OnInit{
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
    crm: ['', [Validators.required]],
    specialty: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    district: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    complements: ['']
    });
  }

  professional: Professional = {
    name: '',
    cpf: "",
    address: {
      zipCode: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      complements: ''
    },
    dateOfBirth: '',
    phone: '',
    email: '',
    gender: '',
    maritalStatus: '',
    crm: '',
    specialty: ''
  }

  userDoctor: UserDoctor = {
    username: '',
    password: '',
    role: ['ROLE_DOCTOR']
  }

  constructor(private professionalService: ProfessionalService,
    private router: Router, private formBuilder: FormBuilder) {}

    createNewDoctor(): void {
    this.professionalService.createNewProfessional(this.professional);
    this.professionalService.createUserDoctor(this.userDoctor);
    this.professionalService.showMessage("Cadastrado com sucesso!");
    this.router.navigate(["/admin/listar-profissional"]);
  }


  cancel(): void {
    this.router.navigate(['/login'])
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

  especialidade: Especialidade[] = [
    {value: 'ORTHOPEDICS', viewValue: 'Ortopedia'},
    {value: 'PEDIATRICS', viewValue: 'Pediatria'},
    {value: 'DERMATOLOGY', viewValue: 'Dermatologia'},
    {value: 'CARDIOLOGY', viewValue: 'Cardiologia'},
    {value: 'GYNECOLOGY', viewValue: 'Ginecologia'},
  ];

}
