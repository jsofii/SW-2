import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Observable } from 'rxjs/Observable';
import { core } from '@angular/compiler';



//import { models} from '../Models/usuarios';

@Injectable()
export class usuarioServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodosUsuarios() {
    return this.http.get('https://localhost:5001/api/Persona/InfoPersonas');

  }
  ListaTodosProfesores() {
    return this.http.get('https://localhost:5001/api/Persona/ListaProfesores');

  }
  ListaTipoPersona() {
    return this.http.get('https://localhost:5001/api/TipoPersona/Lista');
  }
  ListaUsuario() {
    return this.http.get('https://localhost:5001/api/Usuario/ListaUsuario');
  }
  RemoveUsuario(idusuario: number) {
    return this.http.delete('https://localhost:5001/api/Usuario/DeleteUsuario/' + idusuario);
  }
  EditarUsuario(idusuario: number, nombreusuario: string, password: string, estado: string) {
    var user = {
      Idusuario: idusuario,
      Nombreusuario: nombreusuario,
      Password: password,
      Estado: estado
    }
    return this.http.post('https://localhost:5001/api/Usuario/Editar/', user);
  }
  existeUsuario(correo: string) {
    return this.http.get('https://localhost:5001/api/Persona/existeUsuario/' + correo);
  }
  temporalPass(corr: string) {
    var correo = {
      Correo: corr
    }
    return this.http.post('https://localhost:5001/api/Persona/temporalPass/', correo);
  }
  CargarUsuario(idusuario: number) {
    return this.http.get('https://localhost:5001/api/Usuario/UsuarioEditar/' + idusuario);
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

  GetPersonaId(idperson: number) {
    return this.http.get('https://localhost:5001/api/Persona/Get/' + idperson);
  }

  EditPersona(idperson: number, nombrecompleto: any, idpersonal: any, idTipoPersona: any, correoE: any) {
    var temp = {
      Idpersona: idperson,
      Nombrecompleto: nombrecompleto,
      Identificacionpersonal: idpersonal,
      Idtipopersona: idTipoPersona,
      Correo: correoE
    }
    return this.http.put('https://localhost:5001/api/Persona/Editpersona/', temp);

  }


  AddUser(idpersona: number, nombreUsuario: string, password: string, estado: string) {
    var user = {
      Idpersona: idpersona,
      Nombreusuario: nombreUsuario,
      Password: password,
      Estado: estado
    }
    return this.http.post('https://localhost:5001/api/Usuario/addUsuario/', user);
  }



}
