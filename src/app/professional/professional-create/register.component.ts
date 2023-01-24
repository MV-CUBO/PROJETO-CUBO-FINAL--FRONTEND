import { Component } from '@angular/core';

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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  dataSelecionada: Date = new Date();
  email!: string;
    


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
