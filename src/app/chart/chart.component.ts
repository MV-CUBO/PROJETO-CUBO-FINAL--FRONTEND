import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  constructor() {
    Chart.register(...registerables)
  }

  @ViewChild
  ("grafico", { static: true }) elemento!: ElementRef;

  ngOnInit(){
      const grafico = new Chart(this.elemento.nativeElement, {
      type:  'line',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
          {
            data: [85,72,86,81,84,86,94,60,62,65,41,58],
            borderColor: '#00AEFF',
          
          },
          {
            data: [33,38,10,93,68,50,35,29,34,2,62,4],
            borderColor: "#FFCC00",
    
          }
        ]
      },
    });
  }
}

