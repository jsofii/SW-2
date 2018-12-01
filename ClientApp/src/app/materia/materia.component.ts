import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ListaParametro:any[] =["Código","Nombre"];
  inputParametro="Elegir parámetro"
  CargarTipoParametro(parametro:any){
    this.inputParametro=parametro;

  }


}
