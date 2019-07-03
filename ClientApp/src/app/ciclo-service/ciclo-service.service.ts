import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class cicloServiceService {


  baseUrl: string = "";
  constructor( @Inject('BASE_URL') baseUrlH: string, private http: HttpClient) {
    this.host = "https://localhost:5001";
    this.baseUrl = baseUrlH;
  }

  host: string;


  ListaTodosCiclos() {
    return this.http.get(this.baseUrl+'api/Ciclo/ListaCiclos');

  }

  ListaTodosCiclosActivos() {
    return this.http.get(this.baseUrl+'api/Ciclo/ListaCiclosActivos');

  }


  GetCicloId(id: number) {
    return this.http.get(this.baseUrl+'api/Ciclo/Get/' + id);
  }
  EditCiclo(idciclo: any, nombreCiclo: any, fechainicio: any, fechaifin: any, estado: any) {
    var temp = {
      Idciclo: idciclo,
      Nombre: nombreCiclo,
      Fechainicio: fechainicio,
      Fechafin: fechaifin,
      Estado: estado


    }


    return this.http.put(this.baseUrl+'api/Ciclo/Edit/', temp);

  }

  AddCiclo(nombreCiclo: any, fechainicio: any, fechaifin: any, estado: any) {
    var temp = {
      Nombre: nombreCiclo,
      Fechainicio: fechainicio,
      Fechafin: fechaifin,
      Estado: estado
    }


    return this.http.post(this.baseUrl+'api/Ciclo/Addciclo/', temp);

  }

  DeleteCiclo(idciclo: number) {
    return this.http.delete(this.baseUrl+'api/Ciclo/Eliminar/' + idciclo);

  }





}
