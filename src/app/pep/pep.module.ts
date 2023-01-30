import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { PepComponent } from './pep.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { PepListComponent } from './pep-list/pep-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { PepCreateComponent } from './pep-create/pep-create.component';
import { PepLogComponent } from './pep-log/pep-log.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [PepComponent, PepListComponent, PepLogComponent, PepCreateComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class PepModule { }
