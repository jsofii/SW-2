import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { LaboratorioComponent } from '../laboratorio/laboratorio.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class horarioServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaHorarioMateria(idlaboratio, idciclo) {
    return this.http.get('https://localhost:5001/api/Horario/ListaHorarioMateria/'+idlaboratio+'/'+ idciclo);

  }


  AgregarHorario(idlaboratorio,idmateria,idciclo,horainicio,horafin,dia){
    var temp = {
      Idlaboratorio: idlaboratorio,
      Idmateria: idmateria,
      Idciclo: idciclo,
      Horadeinicio:horainicio,
      Horadefin:horafin,
      Dia:dia

    }


    return this.http.post('https://localhost:5001/api/Horario/addHorario/', temp);

  }

 

  
}
