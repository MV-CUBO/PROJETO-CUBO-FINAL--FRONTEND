import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Professional } from '../professional.model';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'specialty', 'crm', 'id', 'action'];
  dataSource: any;
  listProfessional: any[] = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: ProfessionalService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe ((res: Professional[]) => {
      this.listProfessional = res
      this.dataSource = new MatTableDataSource<Professional>(this.listProfessional)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }



  filterTable(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getrow(row: any) {
    console.log(row)
  }
  edit(row: any) {
    console.log(row)
  }
}
