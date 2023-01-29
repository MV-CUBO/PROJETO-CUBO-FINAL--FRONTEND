import { Especialidade, Professional, UserDoctor } from './../professional.model';
import { Component } from '@angular/core';
import { EstadoCivil, Genero } from '../professional.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-update-professional',
  templateUrl: './update-professional.component.html',
  styleUrls: ['./update-professional.component.scss']
})
export class UpdateProfessionalComponent {
  formCadastro!: FormGroup;
  ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');
  this.service.readById(id!).subscribe(professional => {
    this.professional = professional
  });

  this.formCadastro = this.formBuilder.group({
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]], 
    crm: ['', [Validators.required]],
    specialty: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['',[Validators.required]],
    maritalStatus: ['', [Validators.required]],
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
  private service: ProfessionalService, 
  private router: Router,
  private route: ActivatedRoute,
  private formBuilder: FormBuilder
  ){}

updateDoctor(): void{
  this.service.update(this.professional).subscribe(() => {
    this.service.showMessage('Paciente atualizado com sucesso!');
    this.router.navigate(["/admin"]);
  })
}

cancel(): void{
  this.router.navigate(["/admin"])
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
