import { Professional } from './../professional.model';
import { Router, withHashLocation } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional.service'
import { FormBuilder, FormGroup } from '@angular/forms';



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
    name: [''],
    cpf: [''],
    dateOfBirth: [''],
    phone: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    gender: [''],
    maritalStatus: [''],
    crm: [''],
    specialty: [''],
    zipcode: [''],
    street: [''],
    number: [''],
    district: [''],
    city: [''],
    state: [''],
    complements: ['']
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
  email!: string;
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
