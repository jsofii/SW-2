import { TestBed, inject } from '@angular/core/testing';

import { ConsultaHorarioServiceService } from './consulta-horario-service.service';

describe('ConsultaHorarioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaHorarioServiceService]
    });
  });

  it('should be created', inject([ConsultaHorarioServiceService], (service: ConsultaHorarioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
