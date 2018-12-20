import { Component, OnInit } from '@angular/core';
import { cicloServiceService} from '../ciclo-service/ciclo-service.service';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { materiaServiceService } from '../materia-service/materia-service.service';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
}
)

export class HorarioComponent implements OnInit {

  constructor( private serviceLaboratorio:laboratorioServiceService, 
    private serviceusuario:usuarioServiceService,
    private servicemateria:materiaServiceService,private serviceCiclo: cicloServiceService) { 
   
  }
  ngOnInit() {
    this.ObtenerTodosCiclos();
    this.CargarLaboratorios();
    this.CargarMaterias();
    this.CargarProfesores();
  }
  
  ListaTodosCiclos:any;

  ObtenerTodosCiclos(){
    this.serviceCiclo.ListaTodosCiclos().subscribe(
      
      data=>{
        this.ListaTodosCiclos=data;
      }
      )
  }

  DeleteCiclo(idciclo:number){
    
    if(confirm("SE ELIMINARA?")){

    this.serviceCiclo.DeleteCiclo(idciclo).subscribe(
      data=>{
       
        this.ObtenerTodosCiclos();

      }
    )
  }else{ 
  }
}

inputLaboratorioNombre="Seleccione el Laboratorio";
inputLaboratorioID:any;
ListaLaboratorios:any;
CargarLaboratorios(){
  this.serviceLaboratorio.ListaTodosLaboratorios().subscribe(
    data=>{
      this.ListaLaboratorios=data;
    }
  )
}

CargarLaboratoriosID(idlaboratorio:any, nombre:any)
  {
    this.inputLaboratorioNombre=nombre;
    this.inputLaboratorioID=idlaboratorio;
  }

inputCicloNombre="Seleccione el Ciclo";
inputCicloID:any;
CargarCicloID(idciclo:any,nombre:any){
  this.inputCicloNombre=nombre;
  this.inputCicloID=idciclo;
}

inputProfesorNombre="Seleccione el Profesor";
inputProfesorID:any;
ListaProfesores:any;
CargarProfesores(){
this.serviceusuario.ListaTodosUsuarios().subscribe(
    data=>{
      this.ListaProfesores=data;
    }
  )
}
CargarProfesorID(idpersona:any,nombrecompleto:any){
    this.inputProfesorNombre=nombrecompleto;
    this.inputProfesorID=idpersona;
}

inputMateriaNombre="Seleccione la Materia";
inputMateriaID:any;
ListaMaterias:any;
CargarMaterias(){
  this.servicemateria.ListaTodasMaterias().subscribe(
    data=>{
      this.ListaMaterias=data;
    }
  )
}

CargarMateriaID(idmateria:any,nombre:any){
  this.inputMateriaID=idmateria;
  this.inputMateriaNombre=nombre;
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