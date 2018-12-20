import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioComponent } from './horario.component';

import { CicloGestionComponent} from '../ciclo-gestion/ciclo-gestion.component';

describe('CicloGestionComponent', () => {
  let component: CicloGestionComponent;
  let fixture: ComponentFixture<CicloGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('HorarioComponent', () => {
  let component: HorarioComponent;
  let fixture: ComponentFixture<HorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



