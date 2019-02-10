import { Component, OnInit } from '@angular/core';
import { cicloServiceService } from '../ciclo-service/ciclo-service.service';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { materiaServiceService } from '../materia-service/materia-service.service';
import { horarioServiceService } from '../horario-service/horario-service.service';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
}
)

export class HorarioComponent implements OnInit {
  horainicio: any;
  constructor(private serviceLaboratorio: laboratorioServiceService,
    private serviceusuario: usuarioServiceService,
    private servicemateria: materiaServiceService, private serviceCiclo: cicloServiceService,
    private servicehorario: horarioServiceService) {

  }
  ngOnInit() {
    this.ObtenerTodosCiclos();
    this.ObtenerTodosCiclosActivos();
    this.CargarLaboratorios();
    this.CargarMaterias();
    this.CargarHorarioMateria();
    this.CargarProfesores();
  }
  hola() {
    console.log("holar");
  }

  
  cargar() {
    this.servicehorario.ListaHorarioMateria(this.inputLaboratorioID, this.inputCicloID).subscribe(
      data => {
        this.listaHorarios = data;
      }
    )
  }
  diaselected: any;
  setHora(item, dia) {
    this.nuevodia=dia;
    switch (dia) {
      case 1:
        this.diaselected = "Lunes";
        break;
      case 2:
        this.diaselected = "Martes";
        break;
      case 3:
        this.diaselected = "Miercoles"
        break;
      case 4:
        this.diaselected = "Jueves";
        break;
      case 5:
        this.diaselected = "Viernes";
        break;
      case 6:
        this.diaselected = "Sabado";
        break;


    }
    this.horainicio = item;
   
  }

  ListaTodosCiclos: any;

  ObtenerTodosCiclosActivos() {
    this.serviceCiclo.ListaTodosCiclosActivos().subscribe(

      data => {
        this.ListaTodosCiclos = data;
      }
    )
  }


  ListaTodosCiclosDisponibles:any;
  ObtenerTodosCiclos() {
    this.serviceCiclo.ListaTodosCiclos().subscribe(

      data => {
        this.ListaTodosCiclosDisponibles = data;
      }
    )
  }

  

  DeleteCiclo(idciclo: number) {

    if (confirm("SE ELIMINARA?")) {

      this.serviceCiclo.DeleteCiclo(idciclo).subscribe(
        data => {

          this.ObtenerTodosCiclos();

        }
      )
    } else {
    }
  }

  inputLaboratorioNombre = "Seleccione el Laboratorio";
  inputLaboratorioID: any;
  ListaLaboratorios: any;
  CargarLaboratorios() {
    this.serviceLaboratorio.ListaLaboratoriosActivos().subscribe(
      data => {
        this.ListaLaboratorios = data;
      }
    )
  }

  CargarLaboratoriosID(idlaboratorio: any, nombre: any) {
    this.inputLaboratorioNombre = nombre;
    this.inputLaboratorioID = idlaboratorio;
  }

  inputCicloNombre = "Seleccione el Ciclo";
  inputCicloID: any;
  CargarCicloID(idciclo: any, nombre: any) {
    this.inputCicloNombre = nombre;
    this.inputCicloID = idciclo;
  }

  inputProfesorNombre = "Seleccione el Profesor";
  inputProfesorID: any;
  ListaProfesores: any;
  CargarProfesores() {
    this.serviceusuario.ListaTodosUsuarios().subscribe(
      data => {
        this.ListaProfesores = data;
      }
    )
  }
  CargarProfesorID(idpersona: any, nombrecompleto: any) {
    this.inputProfesorNombre = nombrecompleto;
    this.inputProfesorID = idpersona;
  }

  inputMateriaNombre = "Seleccione la Materia";
  inputMateriaID: any;
  ListaMaterias: any;
  nuevaHora:any;
  nuevoCiclo:any;
  nuevaMateria:any;
  nuevoLabo:any;
  nuevodia:any;

  CargarMaterias() {
    this.servicemateria.ListaTodasMateriasActivas().subscribe(
      data => {
        this.ListaMaterias = data;
      }
    )
  }

  CargarMateriaID(idmateria: any, nombre: any) {
    this.inputMateriaID = idmateria;
    this.inputMateriaNombre = nombre;
  }

  listaDias: any[] = [1, 2, 3, 4, 5, 6];
  listaHoras: any[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  listaHoras2: any[] = ['07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00'
    , '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'];
  ListaParametro: any[] = ["Nombre", "Fecha Inicio", "Fecha Fin"];
  inputParametro = "Elegir parámetro"
  CargarTipoParametro(parametro: any) {
    this.inputParametro = parametro;
  }
  listaHorarios: any;
  CargarHorarioMateria() {

  }
  estaEnRango(horaInicio: number, horafin: number, horaInit: number, dia: number, dias: number) {
    if (horaInit >= horaInicio && horaInit <= horafin && dia == dias) {
      return true;
    } else {
      return false;
    }
  }
  /*GuardarHorario(){
    console.log(this.nuevaHora)
   // console.log(this.nuevodia, this.nuevaHora, this.nuevaMateria, this.nuevoLabo, this.nuevoCiclo,this.diaselected)
  }*/
  seleccionarHoraFin(item){
    
  }
  ciclo(){
    //console.log(this.nuevoCiclo);
  }


  //variables para insertar el horario
  idlaboratorio:any;
  idmateria:any;
  idciclo:any;
 
  horafin:any;
  dia:any;

  selectIdMateria (event: any) {
    //update the ui
    this.idmateria = event.target.value;
   // console.log(this.idmateria)
  }

  selectIdCiclo (event: any) {
    //update the ui
    this.idciclo = event.target.value;
   // console.log(this.idciclo)
  }

  selectHorafin (event: any) {
    //update the ui
    this.horafin = event.target.value;
    
   // console.log(this.horafin)
  }

  selectIdLaboratorio (event: any) {
    //update the ui
    this.idlaboratorio = event.target.value;
    //console.log(this.idlaboratorio)
  }

  GuardarHorario(){
    this.servicehorario.AgregarHorario(this.idlaboratorio,this.idmateria,this.idciclo,this.horainicio,this.horafin-1,this.nuevodia).subscribe(

      data => {
        alert('Horario agregado correctamente.')
      }
    )
  }

 

}