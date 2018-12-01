import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { MateriaComponent } from '../materia/materia.component';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class materiaServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodasMaterias() {
    return this.http.get('https://localhost:5001/api/Materia/ListaMaterias');

  }
  


}
