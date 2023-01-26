import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { PepComponent } from './pep.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { PepCreateComponent } from './pep-create/pep-create.component';



@NgModule({
  declarations: [PepComponent,PepCreateComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class PepModule { }
