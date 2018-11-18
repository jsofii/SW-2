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



}
