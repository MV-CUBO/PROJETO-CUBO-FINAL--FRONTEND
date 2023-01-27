import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { DashboardService } from './dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  genderMale: any = 0
  genderFemale: any = 0 
  statusPatientActivate: any = 0
  statusPatientDisabled: any = 0
  statusInpatient: any = 0
  statusOutpatient: any = 0
  statusCritical: any = 0
  statusSurgery: any = 0
  statusRehabilitation: any = 0
  statusHospice: any = 0
  statusObservation: any = 0
  statusAmbulatory:any = 0
  statusExams:any = 0
  statusConsultation: any= 0  
  statusmedicActivate: any = 0
  ststusmedicDisabled: any = 0

  
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
    console.log(this.genderMale + "obaw")
  }
  // Doughnut
  public personChartLabels: string[] = ['Masculino', 'Feminino',];
  public personChartData: ChartData<'doughnut'> = {
    labels: this.personChartLabels,

    datasets: [
      {
        data: [ this.genderMale,this.genderFemale],
        backgroundColor: [
          '#284865',
          '#457eb3'
        ]
      },
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
  public medicoChartLabels: string[] = ['Ativos', 'Inativos',];
  public medicoChartData: ChartData<'doughnut'> = {
    labels: this.medicoChartLabels,
    datasets: [
      {
        data: [this.statusPatientActivate,this.statusPatientDisabled],
        backgroundColor: [
          '#284865',
          '#457eb3'
        ]
      },
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

