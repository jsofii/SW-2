import { Component, OnInit } from '@angular/core';
import { cicloServiceService } from '../ciclo-service/ciclo-service.service';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { materiaServiceService } from '../materia-service/materia-service.service';
import { horarioServiceService } from '../horario-service/horario-service.service';
import { runInThisContext } from 'vm';
import { Schedule, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from '../reserva/helper';
import { L10n } from '@syncfusion/ej2-base';

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

  constructor(private serviceLaboratorio: laboratorioServiceService,
    private serviceusuario: usuarioServiceService,
    private servicemateria: materiaServiceService, private serviceCiclo: cicloServiceService,
    private servicehorario: horarioServiceService) {

  }
  ngOnInit() {
    this.CargarLaboratorios();
    
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

  CargarHorario() {
    this.scheduleData = new Array<any>();
    this.CargarLaboratorios();
  


    this.serviceLaboratorio.GetHorarios(this.inputLaboratorioID).subscribe(
      data => {

        this.scheduleData2 = data;
        
        this.scheduleData3 = this.scheduleData2;
        this.ListaReservasOriginal=this.scheduleData3;
        this.cont = this.scheduleData3.length;
        console.log(this.cont);
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
        // this.scheduleObj.data
       // this.scheduleObj.destroy();
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
  

  GuardarHorario() {
    this.tamaño = this.scheduleData.length;
    this.nuevas = this.scheduleData.length - this.cont;

    for (let index = 0; index < this.nuevas; index++) {

      this.x = this.scheduleData[this.tamaño - 1];
      this.fechaInicio = this.x.StartTime;
      this.fechaFin = this.x.EndTime;
      const fechaUntil=this.x.RecurrenceRule;

      this.serviceLaboratorio.AddReserva(this.fechaInicio.getFullYear(), this.fechaInicio.getMonth(),
        this.fechaInicio.getDate(), this.fechaInicio.getHours(), this.fechaInicio.getMinutes(),
        this.fechaFin.getFullYear(), this.fechaFin.getMonth(), this.fechaFin.getDate(), this.fechaFin.getHours(),
        this.fechaFin.getMinutes(), this.x.Subject, this.inputLaboratorioID,"H",fechaUntil).subscribe(
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