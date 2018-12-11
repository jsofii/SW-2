import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { MateriaComponent } from '../materia/materia.component';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class loginServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodasMaterias() {
    return this.http.get('https://localhost:5001/api/Materia/ListaMaterias');

  }
  
  AddMateria(nombreMateria: any, codMateria: any) {
    var temp = {
      Nombre: nombreMateria,
      Codigo: codMateria
      
    }

    
    return this.http.post('https://localhost:5001/api/Materia/Addmat/', temp);

  }
  verificar(usuario:any, contrasenia:any) {

   return  this.http.get('https://localhost:5001/api/Usuario/verificarUsuario/' + usuario + '/' + contrasenia);

   


  }

  DeleteMateria(idmateria: number){
    return this.http.delete('https://localhost:5001/api/Materia/Eliminar/' + idmateria);
  
  }

  


  
}
