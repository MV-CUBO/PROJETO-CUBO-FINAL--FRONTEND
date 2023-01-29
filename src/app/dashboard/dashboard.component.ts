import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartData, ChartType } from 'chart.js';
import { DashboardService } from './dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  genderMale: number = 2
  genderFemale: number = 3
  statusPatientActivate: number = 5
  statusPatientDisabled: number = 3
  statusInpatient: number = 4
  statusOutpatient: number = 5
  statusCritical: number = 6
  statusSurgery: number = 3
  statusRehabilitation: number = 2
  statusHospice: number = 3
  statusObservation: number = 2
  statusAmbulatory: number = 5
  statusExams: number = 5
  statusConsultation: number = 2
  statusmedicActivate: number = 4
  ststusmedicDisabled: number = 5

  constructor(private dashboardservice: DashboardService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.dashboardservice.FindByGender("MALE").subscribe(male => {
      this.genderMale = male
    })
    this.dashboardservice.FindByGender("FEMALE").subscribe(female => {
      this.genderFemale = female
    })
    this.dashboardservice.FindPatientsByStatus("ACTIVATE").subscribe(patientActivate => {
      this.statusPatientActivate = patientActivate
    })
    this.dashboardservice.FindPatientsByStatus("DISABLED").subscribe(patientDisabled => {
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

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 1, rows: 1 },
        ];
      }
      return [
        { cols: 1, rows: 2 },
      ];
    })
  );

  public statusPatientChartLabels: string[] = ['INTERNADO', 'ALTA', 'CRÍTICO',
    'CIRURGIA', 'REABILITAÇÃO', 'HOSPÍCIO',
    'OBSERVAÇÃO', 'AMBULATÓRIO', 'EXAME',
    'CONSULTA'];
  public statusPatientChartData: ChartData<'bar'> = {
    labels: this.statusPatientChartLabels,
    datasets: [
      {
        label: "Pacientes por status Clínico",
        data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(133, 112, 215, 0.5)',
          'rgba(100, 235, 67, 0.5)',
          'rgba(220, 125, 37, 0.5)'],
        borderColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)',
          'rgba(133, 112, 215)',
          'rgba(100, 235, 65)',
          'rgba(220, 125, 37)'],
        borderWidth: 1
      }],
  };

  public statusPatientChartType: ChartType = 'bar';
  public patientGenderChartLabels: string[] = ['Masculino', 'Feminino',];
  public patientGenderChartData: ChartData<'doughnut'> = {
    labels: this.patientGenderChartLabels,
    datasets: [
      {
        data: [this.genderMale, this.genderFemale],
        backgroundColor: [
          '#5F9EA0',
          '#F4A460'
        ]
      }]
  };
  public patientGenderChartType: ChartType = 'doughnut';

  public doctorChartLabels: string[] = ['Ativos', 'Inativos',];
  public doctorChartData: ChartData<'doughnut'> = {
    labels: this.doctorChartLabels,
    datasets: [
      {
        data: [this.statusPatientActivate, this.statusPatientDisabled],
        backgroundColor: [
          '#FA8072',
          '#EE82EE'
        ]
      }]
  };
  public doctorChartType: ChartType = 'doughnut';

  public patientStatusChartLabels: string[] = ['Ativos', 'Inativos',];
  public patientStatusChartData: ChartData<'doughnut'> = {
    labels: this.patientStatusChartLabels,
    datasets: [
      {
        data: [this.statusPatientActivate, this.statusPatientDisabled],
        backgroundColor: [
          '#CD5C5C',
          '#4682B4']
      }]
  };
  public patientStatusChartType: ChartType = 'doughnut';
}