import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { MateriaComponent } from '../materia/materia.component';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class loginServiceService {


  baseUrl: string = "";
  constructor( @Inject('BASE_URL') baseUrlH: string, private http: HttpClient) {
    this.host = "https://localhost:5001";
    this.baseUrl = baseUrlH;
  }

  host: string;


  ListaTodasMaterias() {
    return this.http.get(this.baseUrl+'api/Materia/ListaMaterias');

  }
  
  AddMateria(nombreMateria: any, codMateria: any) {
    var temp = {
      Nombre: nombreMateria,
      Codigo: codMateria
      
    }

    
    return this.http.post(this.baseUrl+'api/Materia/Addmat/', temp);

  }
  verificar(usuario:any, contrasenia:any) {

   return  this.http.get(this.baseUrl+'api/Usuario/verificarUsuario/' + usuario + '/' + contrasenia);

   


  }

  DeleteMateria(idmateria: number){
    return this.http.delete(this.baseUrl+'api/Materia/Eliminar/' + idmateria);
  
  }

  


  
}
