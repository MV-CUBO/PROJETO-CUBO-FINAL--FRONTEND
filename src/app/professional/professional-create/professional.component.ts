import { Professional } from './../professional.model';
import { Router, withHashLocation } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





interface Cargo {
  value: string;
  viewValue: string;
}

interface Genero {
  value: string;
  viewValue: string;
}

interface EstadoCivil{
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})

export class ProfessionalComponent implements OnInit{
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
    zipcode: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    district: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    complements: ['', [Validators.required]]
    });
  }

  professional: Professional = {
    name: 'Angelo',
    cpf: "12345678910",
    dateOfBirth: new Date(),
    phone: '81998744854',
    email: 'dsa',
    password: "sad",
    gender: 'dsa',
    maritalStatus: 'dsa',
    crm: 'dsa',
    specialty: 'dsa',
    zipcode: 'das',
    street: 'das',
    number: 'dsa',
    district: 'asd',
    city: 'dsad',
    state: 'das',
    complements: 'sda'
  }

  constructor(private professionalService: ProfessionalService,
    private router: Router, private formBuilder: FormBuilder) {}

  createProfessional(): void {
    this.professionalService.create(this.professional);
    this.professionalService.showMessage("Cadastrado com sucesso!");
    console.log(this.professional);
  }

  cancel(): void {
    this.router.navigate(['/login'])
  }

  dataSelecionada: Date = new Date();
  nome!: string;
    


  cargos: Cargo[] = [
    {value: 'doctor', viewValue: 'Médico(a)'},
    {value: 'nurse', viewValue: 'Enfermeiro(a)'},
  ];

  generos: Genero[] = [
    {value: 'masculine', viewValue: 'Masculino'},
    {value: 'feminine', viewValue: 'Feminino'},
  ];

  estadoCivil: EstadoCivil[] = [
    {value: 'not married', viewValue: 'Solteiro(a)'},
    {value: 'married', viewValue: 'Casado(a)'},
    {value: 'widower', viewValue: 'Viuvo(a)'},
    {value: 'divorced', viewValue: 'Divorciado(a)'},
  ];

}
