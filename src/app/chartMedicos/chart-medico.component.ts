import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-medico',
  templateUrl: './chart-medico.component.html',
  styleUrls: ['./chart-medico.component.css']
})
@Injectable({  providedIn: 'root'})
export class ChartMedicoComponent implements OnInit{

  constructor() {
    Chart.register(...registerables)
  }

  @ViewChild
  ("graficoMedico", { static: true }) elemento!: ElementRef;

  ngOnInit(){
    
   const graficoPaciente = new Chart(this.elemento.nativeElement, {
      type:  'pie',
      data: {
        labels: ["Médicos ativos","Médicos inativos"],
        datasets: [
          {
            data: [10,15],
            borderColor: '',
            
          },
        ]
      },
    });
   
  }
}
