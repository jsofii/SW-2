import { Injectable } from '@angular/core';
import { ItemHorarioConsulta } from '../consulta-horario/modelo/itemHorarioConsulta';
import { HttpClient } from '@angular/common/http';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';

@Injectable()
export class ConsultaHorarioServiceService {
  

  host: string;
  todosHorariosConsultados:ItemHorarioConsulta[]=[];
  todosHorarios:any;
  ListaLaboratorios:Array<any>;

  constructor(private _serviceLaboratorio: laboratorioServiceService,
    private http: HttpClient) {
    this.host = "https://localhost:5001";
   }

   buscarHorarioPorParametro(busqueda: string): ItemHorarioConsulta[] {
    var tempArray:ItemHorarioConsulta[]=[];
    this.todosHorariosConsultados.forEach(element => {
      if(element.asunto.includes(busqueda)){
        tempArray.push(element);
      }
    });
    return tempArray;
  }

  obtenerTodosHorariosConsulta():ItemHorarioConsulta[]{
    this._serviceLaboratorio.ListaLaboratoriosActivos().subscribe(
      data => {
        this.ListaLaboratorios = data as Array<any>;
        this.GetHorarios().subscribe(
          data => {
            this.todosHorarios = data as Array<any> ;
            this.todosHorarios.forEach(element => {
              const ciclo=this.obtenerSemestre(element.mes);
              const nombreLabo=this.obtenerNombreLaboratorio(element.idlaboratorio);
              const itemHorario:ItemHorarioConsulta={
                asunto:element.subject,
                laboratorio:nombreLabo,
                anio:element.anio,
                semestre:ciclo,
                horaInicio:element.hora,
                horaFin:element.horafin
              }
              this.todosHorariosConsultados.push(itemHorario);
            });
          }
        )
      }
    )
    
    

    
    return this.todosHorariosConsultados;
  }

  
  obtenerSemestre(mes:number):string{
    if(mes>3 && mes<10){
      return 'A';
    }else{
      return 'B';
    }
  }

  obtenerNombreLaboratorio(idlaboratorio:number):string{
    var nombreLabo='';
    this.ListaLaboratorios.forEach(element => {
      if(idlaboratorio==element.idlaboratorio){
        nombreLabo=element.nombre;
      }
    });
    return nombreLabo;
  }
  
  GetHorarios(){
    return this.http.get('https://localhost:5001/api/Horario/todos_horarios/');
  }

}
