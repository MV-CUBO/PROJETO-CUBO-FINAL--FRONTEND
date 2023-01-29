import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './access/auth/auth.guard';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PepComponent } from './pep/pep.component';
import { PepCreateComponent } from './pep/pep-create/pep-create.component';
import { PepListComponent } from './pep/pep-list/pep-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'createpep', component: PepCreateComponent },
  {

    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
     data: {
      roles: ['ROLE_ADMIN']
    }
  },
  { path: 'patient/pep', component: PepComponent },
  {
    path: 'admin/listapep',
    component: PepListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PATIENT'] }
  },

  {path: 'patientlist', component: PatientListComponent},

  {
    path: 'admin/lista-paciente',
    component: PatientListComponent,
  
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }