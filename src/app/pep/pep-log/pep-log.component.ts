import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';
import {  PepLog } from '../pep';
import { PepService } from '../pep.service';

@Component({
  selector: 'app-pep-log',
  templateUrl: './pep-log.component.html',
  styleUrls: ['./pep-log.component.css']
})
export class PepLogComponent implements OnInit {
  displayedColumns: string[] = ['pepId', 'action', 'createdAt'];
  dataSource: any;
  pepLogs: PepLog[] = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: PepService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAllLogs().subscribe((res) => {
      this.pepLogs = res;
      this.pepLogs.forEach(element => {
        element.createdAt = new Date(element.createdAt).toLocaleString('pt-BR')
      })
      this.dataSource = new MatTableDataSource<PepLog>(this.pepLogs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  filterTable(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

}
