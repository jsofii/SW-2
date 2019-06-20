import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHorarioComponent } from './consulta-horario.component';

describe('ConsultaHorarioComponent', () => {
  let component: ConsultaHorarioComponent;
  let fixture: ComponentFixture<ConsultaHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
