import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { LaboratorioComponent } from '../laboratorio/laboratorio.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class laboratorioServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodosLaboratorios() {
    return this.http.get('https://localhost:5001/api/Laboratorio/ListaLaboratorios');

  }
  


  ListaLaboratoriosActivos(){
    return this.http.get('https://localhost:5001/api/Laboratorio/ListaLaboratoriosActivos');
  }

  GetReservas(idlaboratorio){
    return this.http.get('https://localhost:5001/api/Horario/reservas/'+idlaboratorio);
  }
  GetHorarios(idlaboratorio){
    return this.http.get('https://localhost:5001/api/Horario/horarios/'+idlaboratorio);
  }
  GetLaboratorioId(id: number) {
    return this.http.get('https://localhost:5001/api/Laboratorio/Get/' + id);
  }
  EditLaboratorio(idlaboratorio: any, numeroLaboratorio: any, nombreLaboratorio: any, estado: any) {
    var temp = {
      idlaboratorio: idlaboratorio,
      Numero: numeroLaboratorio,
      Nombre: nombreLaboratorio,
      Estado: estado

    }


    return this.http.put('https://localhost:5001/api/Laboratorio/Edit/', temp);

  }

  AddLaboratorio(numeroLaboratorio: any, nombreLaboratorio: any, estado: any) {
    var temp = {
      Numero: numeroLaboratorio,
      Nombre: nombreLaboratorio,
      Estado: estado

    }


    return this.http.post('https://localhost:5001/api/Laboratorio/Addlab/', temp);

  }
  AddReserva(Anio, Mes, Dia, Hora, Minutos, AnioFin, MesFin, Diafin, Horafin, Minutosfin, Subject, InputLaboratorioID, Tipo, Until) {
    var temp = {
      Anio: Anio,
      Mes: Mes,
      Dia: Dia,
      Hora: Hora,
      Minutos: Minutos,
      Aniofin: AnioFin,
      Mesfin: MesFin,
      Diafin: Diafin,
      Horafin: Horafin,
      Minutosfin: Minutosfin,
      Subject: Subject,
      Tipo:Tipo,
      Idlaboratorio:InputLaboratorioID,
      Until:Until


    }


    return this.http.post('https://localhost:5001/api/Horario/addReserva', temp);

  }

 

  DeleteLaboratorio(idlaboratorio: number) {
    return this.http.delete('https://localhost:5001/api/Laboratorio/Eliminar/' + idlaboratorio);

  }
  DeleteReserva(idReserva){
    return this.http.delete('https://localhost:5001/api/Horario/deleteReserva/'+ idReserva );
  }





}
