import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './access/auth/auth.guard';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PepComponent } from './pep/pep.component';
import { PepListComponent } from './pep/pep-list/pep-list.component';
import { CreateDoctorComponent } from './professional/professional-create/create-doctor.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PepLogComponent } from './pep/pep-log/pep-log.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    // data: {
      //   roles: ['ROLE_ADMIN']
      // }
    },
    
    { path: 'patient/pep', component: PepComponent },
    {
      path: 'admin/lista-pep',
    component: PepListComponent,
    // canActivate: [AuthGuard],
    // data: {
      //   roles: ['ROLE_ADMIN']
      // }
    },
  {
    path: 'patient',
    component: PatientComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_PATIENT']
    // }
  },
  { path: 'admin/dashboard', component: DashboardComponent},
  {
    path: 'admin/criar-profissional',
    component: CreateDoctorComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_ADMIN']
    // }
  },
  {
    path: 'admin/criar-paciente',
    component: CreatePatientComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_ADMIN']
    // }
  },
  {
    path: 'admin/pep-log',
    component: PepLogComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   roles: ['ROLE_ADMIN']
    // }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }