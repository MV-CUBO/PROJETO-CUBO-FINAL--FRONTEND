import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMedicoComponent } from './chart-medico.component';

describe('ChartMedicoComponent', () => {
  let component: ChartMedicoComponent;
  let fixture: ComponentFixture<ChartMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
