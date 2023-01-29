import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './access/login/login.module';
import { PepCreateComponent } from './pep/pep-create/pep-create.component';
import { PepModule } from './pep/pep.module';
import { AuthInterceptor } from './access/auth/authInterceptor';
import { PatientModule } from './patient/patient.module';
import { ProfessionalModule } from './professional/professional.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    PepCreateComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    PepModule,
    PatientModule,
    ProfessionalModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
