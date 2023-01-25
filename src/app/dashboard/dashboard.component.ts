import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent {
  // Doughnut
  public personChartLabels: string[] = [ 'Masculino', 'Feminino', ];
  public personChartData: ChartData<'doughnut'> = {
    labels: this.personChartLabels,
    datasets: [
      { data: [ 350, 450,]},
    ]
  };
  public personChartType: ChartType = 'doughnut';

  // events
  public chartClick({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovere({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
    // Doughnut
    public medicoChartLabels: string[] = [ 'Ativos', 'Inativos', ];
    public medicoChartData: ChartData<'doughnut'> = {
      labels: this.medicoChartLabels,
      datasets: [
        { data: [ 350, 450,]},
      ]
    };
    public medicoChartType: ChartType = 'doughnut';
  
    // events
    public chartClic({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHover({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
}
  
