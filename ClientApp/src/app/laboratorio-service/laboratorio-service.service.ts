import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class laboratorioServiceService {


  baseUrl: string = "";
  constructor( @Inject('BASE_URL') baseUrlH: string, private http: HttpClient) {
    this.host = "https://localhost:5001";
    this.baseUrl = baseUrlH;
  }

  host: string;


  ListaTodosLaboratorios() {
    return this.http.get(this.baseUrl+'api/Laboratorio/ListaLaboratorios');

  }
  


  ListaLaboratoriosActivos(){
    return this.http.get(this.baseUrl+'api/Laboratorio/ListaLaboratoriosActivos');
  }

  GetReservas(idlaboratorio){
    return this.http.get(this.baseUrl+'api/Horario/reservas/'+idlaboratorio);
  }
  GetHorarios(idlaboratorio){
    return this.http.get(this.baseUrl+'api/Horario/horarios/'+idlaboratorio);
  }
  GetLaboratorioId(id: number) {
    return this.http.get(this.baseUrl+'api/Laboratorio/Get/' + id);
  }
  EditLaboratorio(idlaboratorio: any, numeroLaboratorio: any, nombreLaboratorio: any, estado: any) {
    var temp = {
      idlaboratorio: idlaboratorio,
      Numero: numeroLaboratorio,
      Nombre: nombreLaboratorio,
      Estado: estado

    }


    return this.http.put(this.baseUrl+'api/Laboratorio/Edit/', temp);

  }

  AddLaboratorio(numeroLaboratorio: any, nombreLaboratorio: any, estado: any) {
    var temp = {
      Numero: numeroLaboratorio,
      Nombre: nombreLaboratorio,
      Estado: estado

    }


    return this.http.post(this.baseUrl+'api/Laboratorio/Addlab/', temp);

  }
  AddReserva(Anio, Mes, Dia, Hora, Minutos, AnioFin, MesFin, Diafin, Horafin, Minutosfin, Subject, InputLaboratorioID, Tipo, Until, IdMateria, IdProfesor) {
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
      Until:Until,
      IdMateria:IdMateria,
      IdProfesor:IdProfesor


    }


    return this.http.post(this.baseUrl+'api/Horario/addReserva', temp);

  }

 

  DeleteLaboratorio(idlaboratorio: number) {
    return this.http.delete(this.baseUrl+'api/Laboratorio/Eliminar/' + idlaboratorio);

  }
  DeleteReserva(idReserva){
    return this.http.delete(this.baseUrl+'api/Horario/deleteReserva/'+ idReserva );
  }





}
