import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { DashboardService } from './dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  genderMale: any = 3 
  genderFemale: any = 4 
  statusPatientActivate: any = 2
  statusPatientDisabled: any = 3
  statusInpatient: any = 4
  statusOutpatient: any = 5
  statusCritical: any = 6
  statusSurgery: any = 3
  statusRehabilitation: any = 2
  statusHospice: any = 3
  statusObservation: any = 2
  statusAmbulatory:any = 5
  statusExams:any = 5
  statusConsultation: any= 2  
  statusmedicActivate: any = 4
  ststusmedicDisabled: any = 5

  constructor(private dashboardservice: DashboardService) {
    

  }
  ngOnInit(): void {
    
    this.dashboardservice.FindByGender("MALE").subscribe(male => {
      this.genderMale = male 
      console.log(male + "oba")
      
      
      
    })
    this.dashboardservice.FindByGender("FEMALE").subscribe(female => {
      this.genderFemale = female
    })
    this.dashboardservice.FindPatientsByStatus("ACTIVATE").subscribe(patientActivate =>{
      this.statusPatientActivate = patientActivate
    })
    this.dashboardservice.FindPatientsByStatus("DISABLED").subscribe(patientDisabled =>{
      this.statusPatientDisabled = patientDisabled
    })
    this.dashboardservice.FindByStatusPep("INPATIENT").subscribe(ipatient => {
      this.statusInpatient = ipatient
    })
    this.dashboardservice.FindByStatusPep("OUTPATIENT").subscribe(outpatient => {
      this.statusOutpatient = outpatient
    })
    this.dashboardservice.FindByStatusPep("CRITICAL").subscribe(critical => {
      this.statusCritical = critical
    })
    this.dashboardservice.FindByStatusPep("SURGERY").subscribe(surgery => {
      this.statusSurgery = surgery
    })
    this.dashboardservice.FindByStatusPep("REHABILITATION").subscribe(rehabilitation => {
      this.statusRehabilitation = rehabilitation
    })
    this.dashboardservice.FindByStatusPep("HOSPICE").subscribe(hospice => {
      this.statusHospice = hospice
    })
    this.dashboardservice.FindByStatusPep("OBSERVATION").subscribe(observation => {
      this.statusObservation = observation
    })
    this.dashboardservice.FindByStatusPep("AMBULATORY").subscribe(ambulatory => {
      this.statusAmbulatory = ambulatory
    })
    this.dashboardservice.FindByStatusPep("EXAMS").subscribe(exams => {
      this.statusExams = exams
    })
    this.dashboardservice.FindByStatusPep("CONSULTATION").subscribe(consultation => {
      this.statusConsultation = consultation
    })
    this.dashboardservice.FindDoctorByStatus("ACTIVATE").subscribe(medicActivate => {
      this.statusmedicActivate = medicActivate
    })
    this.dashboardservice.FindDoctorByStatus("DISABLED").subscribe(medicDisabled => {
      this.statusmedicActivate = medicDisabled
    })    
  
  }

  // Doughnut
  public patientGenderChartLabels: string[] = ['Masculino', 'Feminino',];
  public patientGenderChartData: ChartData<'doughnut'> = {
    labels: this.patientGenderChartLabels,

    datasets: [
      {
        data: [ this.genderMale,this.genderFemale],
        backgroundColor: [
          '#284865',
          '#457eb3',
        
        ]
      },
    ]
  };
  public patientGenderChartType: ChartType = 'doughnut';

  // events
  public chartClick({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovere({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public patientStatusChartLabels: string[] = ['Ativos', 'Inativos',];
  public patientStatusChartData: ChartData<'doughnut'> = {
    labels: this.patientStatusChartLabels,
    datasets: [
      {
        data: [this.statusPatientActivate,this.statusPatientDisabled],
        backgroundColor: [
          '#CD5C5C',
          '#4682B4'
        ]
      },
    ]
  };
  public patientStatusChartType: ChartType = 'doughnut';
  // events
  public chartClikMedic({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovereMedic({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  // Doughnut
  public statusPatientChartLabels: string[] = ['INPATIENT','OUTPATIENT','CRITICAL',
                                               'SURGERY','REHABILITATION','HOSPICE',
                                               'OBSERVATION','AMBULATORY','EXAMS',
                                               'CONSULTATION'];
  public statusPatientChartData: ChartData<'doughnut'> = {
    labels: this.statusPatientChartLabels,
    datasets: [
      {
        data: [this.statusInpatient, this.statusOutpatient, this.statusCritical,
               this.statusSurgery, this.statusRehabilitation, this.statusHospice,
               this.statusObservation, this.statusAmbulatory, this.statusExams,
               this.statusConsultation ],
        backgroundColor: [
          '#284865',
          '#457eb3',
          '#FF0000',
          '#696969',
          '#0000FF',
          '#F4A460',
          '#00FFFF',
          '#FFD700',
          '#FF00FF',
          '#90EE90'
        ]
      },
    ]
  };
  public statusPatientChartType: ChartType = 'doughnut';
  public chartClickPatientStatus({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHoverePatientStatus({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  public doctorChartLabels: string[] = ['Ativos', 'Inativos',];
  public doctorChartData: ChartData<'doughnut'> = {
    labels: this.doctorChartLabels,
    datasets: [
      {
        data: [this.statusPatientActivate,this.statusPatientDisabled],
        backgroundColor: [
          '#228B22',
          '#FF0000'
        ]
      },
    ]
  };
  public doctorChartType: ChartType = 'doughnut';

  // events
  public chartClickStatus({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovereStatus({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

