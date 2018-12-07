import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Observable } from 'rxjs/Observable';



//import { models} from '../Models/usuarios';

@Injectable()
export class usuarioServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodosUsuarios() {
    return this.http.get('https://localhost:5001/api/Usuario/ListaTodo');

  }
  ListaTipoPersona() {
    return this.http.get('https://localhost:5001/api/TipoPersona/Lista');
  }
  AddPersona(nombreCompleto: any, idPersonal: any, idTipoPersona: any, correoE: any) {
    var temp = {
      Nombrecompleto: nombreCompleto,
      Identificacionpersonal: idPersonal,
      Idtipopersona: idTipoPersona,
      Correo: correoE
    }
    return this.http.post('https://localhost:5001/api/Persona/Add/', temp);

  }



}
