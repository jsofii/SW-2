import { Component, OnInit } from '@angular/core';
import { cicloServiceService } from '../ciclo-service/ciclo-service.service';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { materiaServiceService } from '../materia-service/materia-service.service';
import { horarioServiceService } from '../horario-service/horario-service.service';
import { runInThisContext } from 'vm';
import { Schedule, EventRenderedArgs, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from '../reserva/helper';
import { L10n, createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { elementDef } from '@angular/core/src/view';
import { containerEnd } from '@angular/core/src/render3/instructions';
import { element } from 'protractor';

L10n.load({
  "en": {
    "schedule": {
        "day": "Día",
        "week": "Semana",
        "workWeek": "Semana laborable",
        "month": "Mes",
        "agenda": "Agenda",
        "weekAgenda": "Semana de Agenda",
        "workWeekAgenda": "Semana de Agenda Laboral",
        "monthAgenda": "Month Agenda",
        "today": "Hoy",
        "noEvents": "No events",
        "emptyContainer": "There are no events scheduled on this day.",
        "allDay": "Todo el día",
        "start": "Inicio",
        "end": "Fin",
        "more": "más",
        "close": "Cerrar",
        "cancel": "Cancelar",
        "noTitle": "(Sin título)",
        "delete": "Eliminar",
        "deleteEvent": "Eliminar Horario",
        "deleteMultipleEvent": "Eliminar Múltiples Horarios",
        "selectedItems": "Elementos seleccionados",
        "deleteSeries": "Eliminar series",
        "edit": "Editar",
        "editSeries": "Editar Series",
        "editEvent": "Editar Horario",
        "createEvent": "Crear",
        "subject": "Asunto",
        "addTitle": "Agregar título",
        "moreDetails": "Más Detalles",
        "save": "Guardar",
        "editContent": "¿Quiere editar este horario o toda la serie?",
        "deleteRecurrenceContent": "¿Quiere eliminar este horario o toda la serie?",
        "deleteContent": "¿Está seguro de que desea eliminar este horario?",
        "deleteMultipleContent": "Are you sure you want to delete the selected events?",
        "newEvent": "Nuevo Horario",
        "title": "Título",
        "location": "Ubicación",
        "description": "Descripción",
        "timezone": "Zona horaria",
        "startTimezone": "Start Timezone",
        "endTimezone": "End Timezone",
        "repeat": "Repetir",
        "saveButton": "Guardar",
        "cancelButton": "Cancelar",
        "deleteButton": "Eliminar",
        "recurrence": "Recurrencia",
        "wrongPattern": "The recurrence pattern is not valid.",
        "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
        "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
        "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
        "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
        "editRecurrence": "Editar recurrencia",
        "repeats": "Repeticiones",
        "alert": "Alerta",
        "startEndError": "The selected end date occurs before the start date.",
        "invalidDateError": "The entered date value is invalid.",
        "ok": "Ok",
        "occurrence": "Occurrence",
        "series": "Series",
        "previous": "Anterior",
        "next": "Siguiente",
        "timelineDay": "Timeline Day",
        "timelineWeek": "Timeline Week",
        "timelineWorkWeek": "Timeline Work Week",
        "timelineMonth": "Timeline Month"
    },
    "recurrenceeditor": {
        "none": "Niguno",
        "daily": "Diario",
        "weekly": "Semanal",
        "monthly": "Mensual",
        "month": "Mes",
        "yearly": "Anual",
        "never": "Nunca",
        "until": "Hasta",
        "count": "Número de veces",
        "first": "Primero",
        "second": "Segundo",
        "third": "Tercero",
        "fourth": "Cuarto",
        "last": "Último",
        "repeat": "Repetir",
        "repeatEvery": "Repetir cada",
        "on": "Repeat On",
        "end": "Fin",
        "onDay": "Día",
        "days": "Día(s)",
        "weeks": "Semana(s)",
        "months": "Mes(es)",
        "years": "Año(s)",
        "every": "cada",
        "summaryTimes": "vece(s)",
        "summaryOn": "on",
        "summaryUntil": "hasta",
        "summaryRepeat": "Repeticiones",
        "summaryDay": "día(s)",
        "summaryWeek": "semana(s)",
        "summaryMonth": "mes(es)",
        "summaryYear": "año(s)"
    }
  }
});


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
}
)

export class HorarioComponent implements OnInit {
  horainicio: any;
  
  title = 'Horarios de Laboratorios';

  public scheduleData: Array<any>;
  public scheduleData2: any;
  public scheduleData3: Array<any>;
  public ListaReservasOriginal: Array<any>;
  cont: number = 0;
  
  nuevas: number = 0;
  tamaño: number;
  n: Date;
  x: any;
  fechaInicio: Date;
  fechaFin: Date;
  d: Date;
  aux: any;
  inputLaboratorioID: any;
  scheduleObj: any=null;

  

  inputLaboratorioNombre = "Seleccione el Laboratorio";
  ListaLaboratorios: any;

  ListaMaterias:Array<any>;
  Materias=[];
  IdNuevaMateria:number;
  NombreNuevaMateria:string;
  dropDownMaterias:DropDownList;
  ListaProfesores:Array<any>;
  Profesores=[];
  IdNuevoProfesor:number;
  NombreNuevoProfesor:string;
  NombreNuevoAsunto:string;
  public dropDownProfesores:DropDownList;
  ListaCarreras:Array<any>;
  Carreras=[];
  public dropDownCarreras:DropDownList;
  constructor(private serviceLaboratorio: laboratorioServiceService,
    private serviceusuario: usuarioServiceService,
    private servicemateria: materiaServiceService, private serviceCiclo: cicloServiceService,
    private servicehorario: horarioServiceService) {

  }
  ngOnInit() {
    this.CargarLaboratorios();
    this.CargarMaterias();
    this.CargarProfesores();
    this.CargarCarreras();
    
  }
  
  CargarCarreras() {
    this.servicemateria.ListaCarreras().subscribe(
      data => {
        this.ListaCarreras = data as Array<any>;
        this.ListaCarreras.forEach(element => {
          const dict = {text:element.nombre,value:element.idcarrera};
          this.Carreras.push(dict);
        });
      }
    )
  }
  
  CargarMaterias() {
    this.servicemateria.ListaMateriasPorCarrera().subscribe(
      data => {
        this.ListaMaterias = data as Array<any>;
        this.ListaMaterias.forEach(element => {
          const dict = {text:element.nombreM,value:element.idmateria,carrera:'Carrera: '+element.nombreC};
          this.Materias.push(dict);
        });
      }
    )
  }

  CargarProfesores() {
    this.serviceusuario.ListaTodosUsuarios().subscribe(
      data => {
        this.ListaProfesores = data as Array<any>;
        this.ListaProfesores.forEach(element => {
          const dict = {text:element.nombrecompleto,value:element.idpersona};
          this.Profesores.push(dict);
        });
      }
    )
  }


  
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
    this.CargarHorario();

  }

  AgregarDropDownCarreras(args){
    if (!args.element.querySelector('.row-carreras')) {
      let row: HTMLElement = createElement('div', { className: 'row-carreras' });
      let formElement: HTMLElement = args.element.querySelector('.e-schedule-form') as HTMLElement;
      formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
      let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'Carrera' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      this.dropDownCarreras = new DropDownList({
          dataSource: this.Carreras,
            fields: { text: 'text', value: 'value' },
            value: (<{ [key: string]: Object }>(args.data)).EventType as string,
            floatLabelType: 'Always', placeholder: 'Carrera'
      });
      this.dropDownCarreras.appendTo(inputEle);
      inputEle.setAttribute('name', 'Carrera');
      
      
    }
  }   

  
  dropDownMateriaChanged(args){
    if(args!=null){
      this.IdNuevaMateria=args.itemData.value;
      this.NombreNuevaMateria=args.itemData.text;
      console.log(args.itemData);

    }

  }
  dropDownProfesorChanged(args){
    if(args!=null){
      this.IdNuevoProfesor=args.itemData.value;
      this.NombreNuevoProfesor=args.itemData.text;
      console.log(args.itemData);

    }
  }

  AgregarDropDownMaterias(args){
        if (!args.element.querySelector('.row-materias')) {
          let row: HTMLElement = createElement('div', { className: 'row-materias' });
          let formElement: HTMLElement = args.element.querySelector('.e-schedule-form') as HTMLElement;
          formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
          let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
          let inputEle: HTMLInputElement = createElement('input', {
              className: 'e-field', attrs: { name: 'Materia' }
          }) as HTMLInputElement;
          container.appendChild(inputEle);
          row.appendChild(container);
          this.dropDownMaterias = new DropDownList({
              dataSource: this.Materias,
                fields: { groupBy:'carrera',text: 'text', value: 'value' },
                value: (<{ [key: string]: Object }>(args.data)).EventType as string,
                floatLabelType: 'Always', placeholder: 'Materia',allowFiltering: true,
                change:this.dropDownMateriaChanged
                // bind change event handler
          });
          console.log(this.dropDownMaterias);
          this.dropDownMaterias.appendTo(inputEle);
          inputEle.setAttribute('name', 'Materia');
    }
  }

  AgregarDropDownProfesores(args){
    if (!args.element.querySelector('.row-profesores')) {
      let row: HTMLElement = createElement('div', { className: 'row-profesores' });
      let formElement: HTMLElement = args.element.querySelector('.e-schedule-form') as HTMLElement;
      formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
      let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
      let inputEle: HTMLInputElement = createElement('input', {
          className: 'e-field', attrs: { name: 'Profesor' }
      }) as HTMLInputElement;
      container.appendChild(inputEle);
      row.appendChild(container);
      this.dropDownProfesores= new DropDownList({
          dataSource: this.Profesores,
            fields: { text: 'text', value: 'value' },
            value: (<{ [key: string]: Object }>(args.data)).EventType as string,
            floatLabelType: 'Always', placeholder: 'Profesor',allowFiltering: true,
            change:this.dropDownProfesorChanged
      });
      this.dropDownProfesores.appendTo(inputEle);
      inputEle.setAttribute('name', 'Profesor');
    }
  }

  

  CargarHorario() {
    this.scheduleData = new Array<any>();
    this.CargarLaboratorios();
  

    this.serviceLaboratorio.GetHorarios(this.inputLaboratorioID).subscribe(
      data => {

        this.scheduleData2 = data;
        
        this.scheduleData3 = this.scheduleData2;
        this.ListaReservasOriginal=this.scheduleData3;
        this.cont = this.scheduleData3.length;
        this.scheduleData3.forEach(element => {
          let tem = {
            Id: element.id,
            Subject: element.subject,
            StartTime: new Date(element.anio, element.mes, element.dia, element.hora, element.minutos),
            EndTime: new Date(element.aniofin, element.mesfin, element.diafin, element.horafin, element.minutosfin),
            CategoryColor:"#1aaa55"
            

          }
          if(element.tipo=="H"){
            tem['RecurrenceRule']=element.until;
          }
          this.scheduleData.push(tem);

        });
       if(this.scheduleObj!=null){
          this.scheduleObj.destroy();
       }

        this.scheduleObj = new Schedule({
          width: 'auto',
          height: 'auto',
          workDays: [1, 2, 3, 4, 5, 6],
          currentView: 'WorkWeek',
          startHour: '07:00',
          endHour: '21:00',
          locale:'en',
          workHours: {
            highlight: false
          },

          views: ['WorkWeek'],
          popupOpen: (args: PopupOpenEventArgs) => {
              if (args.type === 'Editor') {
                  // Create required custom elements in initial time
                 
                  //this.AgregarDropDownCarreras(args);
                  this.AgregarDropDownMaterias(args);
                  this.AgregarDropDownProfesores(args);
                
             
            }
          },
          eventSettings: {
            dataSource: this.scheduleData,

          },
          eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, this.scheduleObj.currentView)
        });
        
        this.scheduleObj.timeScale.slotCount = 1;
        this.scheduleObj.appendTo('#Schedule');
        

      }
    )

  }


  GuardarCambios() {

    
    this.EliminarReserva();
    this.GuardarHorario();
    alert("Cambios guardados exitosamente");
    
  }
  
  


  obtenerMateriaPorID(id:number):any{
    this.Materias.forEach(function(element){
      if(element.value==id){
        return element;
      }
    });
  }

  obtenerProfesorPorID(id:number){

  }

  GuardarHorario() {
    this.tamaño = this.scheduleData.length;
    this.nuevas = this.scheduleData.length - this.cont;

    for (let index = 0; index < this.nuevas; index++) {

      this.x = this.scheduleData[this.tamaño - 1];
      this.fechaInicio = this.x.StartTime;
      this.fechaFin = this.x.EndTime;
      const fechaUntil=this.x.RecurrenceRule;
      const materia =this.Materias.filter(i => i.value==this.x.Materia)[0];
      const profesor =this.Profesores.filter(i => i.value==this.x.Profesor)[0];
      const asunto=materia.text+" - "+profesor.text;

      this.serviceLaboratorio.AddReserva(this.fechaInicio.getFullYear(), this.fechaInicio.getMonth(),
        this.fechaInicio.getDate(), this.fechaInicio.getHours(), this.fechaInicio.getMinutes(),
        this.fechaFin.getFullYear(), this.fechaFin.getMonth(), this.fechaFin.getDate(), this.fechaFin.getHours(),
        this.fechaFin.getMinutes(), asunto, this.inputLaboratorioID,"H",fechaUntil).subscribe(
          data => {

          }
        )
      this.tamaño--;
      this.cont+=this.nuevas;


    }

  }

  EliminarReserva(){
    this.ListaReservasOriginal;
    this.scheduleData;
    this.ListaReservasOriginal.forEach(element => {
      const index = this.scheduleData.map(e => e.Id).indexOf(element.id)
      if(index==-1){
        this.cont-=1;
        this.serviceLaboratorio.DeleteReserva(element.id).subscribe(
          )
          data=>{
            
          }
      }
      
    });
  }


 

}