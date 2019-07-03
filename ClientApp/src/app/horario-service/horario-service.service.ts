import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { LaboratorioComponent } from '../laboratorio/laboratorio.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class horarioServiceService {


  baseUrl: string = "";
  constructor( @Inject('BASE_URL') baseUrlH: string, private http: HttpClient) {
    this.host = "https://localhost:5001";
    this.baseUrl = baseUrlH;
  }

  host: string;


  ListaHorarioMateria(idlaboratio, idciclo) {
    return this.http.get(this.baseUrl+'api/Horario/ListaHorarioMateria/'+idlaboratio+'/'+ idciclo);

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


    return this.http.post(this.baseUrl+'api/Horario/addHorario/', temp);

  }

 

  
}
