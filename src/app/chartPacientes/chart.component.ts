import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-chart-paciente',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  

  constructor() {
    Chart.register(...registerables)
  }

  @ViewChild
  ("graficoPaciente", { static: true }) elemento!: ElementRef;

  ngOnInit(){
      const graficoPaciente = new Chart(this.elemento.nativeElement, {
      type:  'pie',
      data: {
        labels: ["Pacientes ativos","Pacientes inativos"],
        datasets: [
          {
            data: [45,65],
            borderColor: '',
          
          },
        ]
      },
    });
  }
}

