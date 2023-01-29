import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './access/login/login.module';
import { PepCreateComponent } from './pep/pep-create/pep-create.component';
import { PepModule } from './pep/pep.module';
import { AuthInterceptor } from './access/auth/authInterceptor';
import { PatientModule } from './patient/patient.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfessionalModule } from './professional/professional.module';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    PepCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    PepModule,
    PatientModule,
    DashboardModule,
    ProfessionalModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
