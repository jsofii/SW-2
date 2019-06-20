import { Component, OnInit } from '@angular/core';
import { ItemHorarioConsulta } from './modelo/itemHorarioConsulta';
import { ConsultaHorarioServiceService } from '../consulta-horario-service/consulta-horario-service.service';

@Component({
  selector: 'app-consulta-horario',
  templateUrl: './consulta-horario.component.html',
  styleUrls: ['./consulta-horario.component.css']
})
export class ConsultaHorarioComponent implements OnInit {

  constructor(private readonly _consultaHorarioService:ConsultaHorarioServiceService) { }
  listaHorarios:ItemHorarioConsulta[];
  busqueda:string='';
  ngOnInit() {
    this.obtenerTodosHorarios();
  }

  obtenerTodosHorarios(){
    this.listaHorarios=this._consultaHorarioService.obtenerTodosHorariosConsulta();
  }

  buscarHorarioPorParametro(){
    this.listaHorarios=this._consultaHorarioService.buscarHorarioPorParametro(this.busqueda);
  }
}
