import { Component, OnInit } from '@angular/core';
import { cicloServiceService} from '../ciclo-service/ciclo-service.service';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
}
)

export class HorarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 
 listaDias:any[] = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
 listaHoras :any[] = ['07:00 - 08:00','08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00','12:00 - 13:00'
 ,'13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00','21:00 - 22:00'];
 ListaParametro:any[] =["Nombre","Fecha Inicio","Fecha Fin"];
 inputParametro="Elegir parámetro"
 CargarTipoParametro(parametro:any){
   this.inputParametro=parametro;

 }
}

export class CicloGestionComponent implements OnInit{
  constructor(private serviceCiclo: cicloServiceService ) { }
  
  ListaTodosCiclos:any;

  ObtenerTodosCiclos(){
    this.serviceCiclo.ListaTodosCiclos().subscribe(
      
      data=>{
        this.ListaTodosCiclos=data;
      }

    )
  }
  ngOnInit() {
    this.ObtenerTodosCiclos();
  }
 
}
