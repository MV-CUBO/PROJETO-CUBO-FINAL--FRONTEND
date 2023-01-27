import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pep } from '../pep';
import { PepService } from '../pep.service';

@Component({
  selector: 'app-pep-list',
  styleUrls: ['./pep-list.component.scss'],
  templateUrl: './pep-list.component.html',
})
export class PepListComponent implements OnInit {
  displayedColumns: string[] = ['pepNumber', 'patientId', 'doctorId', 'status', 'action'];
  dataSource: any;
  listPepData: any[] = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: PepService) {

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe((res) => {
      this.listPepData = res
      this.listPepData.forEach(element => {
        this.service.getPatientId(element.patientId).subscribe((res) => {
          element.patientId = res.name
        })
        this.service.getDoctorId(element.doctorId).subscribe((res) => {
          element.doctorId = res.name
        })

      });
      this.dataSource = new MatTableDataSource<Pep>(this.listPepData)
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
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
    console.log(row)
  }

}