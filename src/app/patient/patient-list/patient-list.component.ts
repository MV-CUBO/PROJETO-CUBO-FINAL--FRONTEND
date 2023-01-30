import { PepService } from './../../pep/pep.service';
import { Patient } from './../patient.component';
import { PatientService } from './../patient.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pep } from 'src/app/pep/pep';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent  implements OnInit{
  displayedColumns: string[] = ['name', 'dateOfBirth', 'cpf', 'status', 'action'];
  dataSource: any;
  listPepData: any[] = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: PatientService) {

  }
  ngOnInit(): void {
    this.read()  }

  read(){
    this.service.read().subscribe((res) => {
      this.listPepData = res
      this.listPepData.forEach(element => {
        this.service.readById(element.name).subscribe((res) => {
          element.name = res.name
        })
        this.service.readById(element.cpf).subscribe((res) => {
          element.cpf = res.cpf
        })

      });
      this.dataSource = new MatTableDataSource<Pep>(this.listPepData)
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
    })
  }

  delete(id: string): void{
    this.service.deletePatient(id).subscribe(() => {
      this.service.showMessage('Paciente Deletado com sucesso!')
    })
  }

  filterTable(event: Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getrow(row:any){
    console.log(row)
  }
  edit(row:any){
    this.service.update(row)
  }

}