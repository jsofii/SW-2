import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { MateriaComponent } from '../materia/materia.component';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class materiaServiceService {


  baseUrl: string = "";
  constructor( @Inject('BASE_URL') baseUrlH: string, private http: HttpClient) {
    this.host = "https://localhost:5001";
    this.baseUrl = baseUrlH;
  }

  host: string;


  ListaTodasMaterias() {
    return this.http.get(this.baseUrl+'api/Materia/ListaMaterias');

  }

  ListaTodasMateriasActivas() {
    return this.http.get(this.baseUrl+'api/Materia/ListaMateriasActivas');

  }
  ListaCarreras() {
    return this.http.get(this.baseUrl+'api/Materia/ListaCarreras');

  }

  ListaMateriasPorCarrera(){
    return this.http.get(this.baseUrl+'api/Materia/ListaMateriasCarrera');
  }

  GetMateriaId(id: number) {
    return this.http.get(this.baseUrl+'api/Materia/Get/' + id);
  }
  EditMateria(idmateria: any, nombreMateria: any, codMateria: any, carrera: any, estado: any) {
    var temp = {
      Idmateria: idmateria,
      Nombre: nombreMateria,
      Codigo: codMateria,
      Carrera: carrera,
      Estado: estado

    }


    return this.http.put(this.baseUrl+'api/Materia/Edit/', temp);

  }

  AddMateria(nombreMateria: any, codMateria: any, carrera: any, estado: any) {
    var temp = {
      Nombre: nombreMateria,
      Codigo: codMateria,
      Carrera: carrera,
      Estado: estado

    }


    return this.http.post(this.baseUrl+'api/Materia/Addmat/', temp);

  }

  DeleteMateria(idmateria: number) {
    return this.http.delete(this.baseUrl+'api/Materia/Eliminar/' + idmateria);

  }





}
