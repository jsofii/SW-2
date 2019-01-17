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

  DeleteLaboratorio(idlaboratorio: number) {
    return this.http.delete('https://localhost:5001/api/Laboratorio/Eliminar/' + idlaboratorio);

  }





}
