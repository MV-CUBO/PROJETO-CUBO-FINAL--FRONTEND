import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Chart } from 'chart.js/dist';
import { map } from 'rxjs';
import { DashboardService } from './dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  genderMale:number = 20;
  genderFemale:number = 25;
  statusConsultation: number = 1
  constructor(private dashboardservice: DashboardService) {

    
  }
  ngOnInit(): void {

      this.dashboardservice.FindByGender("MALE").subscribe(male => {
      this.genderMale = male
      })

      this.dashboardservice.FindByGender("FEMALE").subscribe(female => {
        this.genderFemale = female
      })

      this.dashboardservice.FindByStatusPep("CONSULTATION").subscribe(consultation => {
        this.statusConsultation = consultation
      })
  
    
  }
  

  // Doughnut
  public personChartLabels: string[] = [ 'Masculino', 'Feminino', ];
  public personChartData: ChartData<'doughnut'> = {
    labels: this.personChartLabels,
    
    datasets: [
      { data: [ this.genderMale, this.genderFemale],
        backgroundColor:[
          '#284865',
          '#457eb3'
        ]},
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
        { data: [ this.statusConsultation, 450],
          backgroundColor:[
            '#284865',
            '#457eb3'
          ]},
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
  
function FindByGendMale() {
  throw new Error('Function not implemented.');
}

