import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional.service'


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

export class ProfessionalComponent {
  // ngOnInit(): void {
  // }

  constructor(private professionalService: ProfessionalService,
    private router: Router) {}

  createProfessional(): void {
    this.professionalService.showMessage("Cadastrado com sucesso!");
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
