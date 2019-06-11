import { Component, OnInit } from '@angular/core';

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-ng-schedule';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop, View, RecurrenceEditor, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './helper';
import { extend, L10n, createElement } from '@syncfusion/ej2-base';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { elementEnd } from '@angular/core/src/render3/instructions';
import{horarioServiceService} from '../horario-service/horario-service.service';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Schedule.Inject(WorkWeek);


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
        "deleteEvent": "Eliminar Reserva",
        "deleteMultipleEvent": "Eliminar Múltiples Reservas",
        "selectedItems": "Elementos seleccionados",
        "deleteSeries": "Eliminar series",
        "edit": "Editar",
        "editSeries": "Editar Series",
        "editEvent": "Editar Reserva",
        "createEvent": "Crear",
        "subject": "Asunto",
        "addTitle": "Agregar título",
        "moreDetails": "Más Detalles",
        "save": "Guardar",
        "editContent": "¿Quiere editar esta reserva o toda la serie?",
        "deleteRecurrenceContent": "¿Quiere eliminar esta reserva o toda la serie?",
        "deleteContent": "¿Está seguro de que desea eliminar esta reserva?",
        "deleteMultipleContent": "Are you sure you want to delete the selected events?",
        "newEvent": "Nueva Reserva",
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
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class ReservaComponent implements OnInit {
  public scheduleData: Array<any>;
  public scheduleData2: any;
  public scheduleData3: Array<any>;
  public ListaReservasOriginal: Array<any>;
  cont: number = 0;
  constructor(private serviceLaboratorio: laboratorioServiceService, private serviceHorario: horarioServiceService) {


  }
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

  cargarJson(){
  
  }

  
  CargarReserva() {
    this.scheduleData = new Array<any>();
    this.CargarLaboratorios();
  


    this.serviceLaboratorio.GetReservas(this.inputLaboratorioID).subscribe(
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
          if(element.until!=null){
            tem['RecurrenceRule']=element.until;
          }
          if(element.tipo=='H'){
            tem['IsReadonly']=true;
            tem['CategoryColor']="#d12144"
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
          dateFormat: "yyyy/MMMM/dd",
          locale:'en',
          workHours: {
            highlight: false
          },
          views: ['WorkWeek'],
          eventSettings: {
            dataSource: this.scheduleData

          },
          eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, this.scheduleObj.currentView)
        });

        this.scheduleObj.timeScale.slotCount = 1;
        this.scheduleObj.appendTo('#Schedule');
        

      }
    )

  }
  delete() {
    this.scheduleObj.destroy();
  }

  GuardarReserva() {
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
        this.fechaFin.getMinutes(), this.x.Subject, this.inputLaboratorioID,"R",fechaUntil,null,null).subscribe(
          data => {

          }
        )
      this.tamaño--;
      this.cont+=this.nuevas;

    }

  }
  ngOnInit() {

    this.CargarLaboratorios();
    
  }

  title = 'Reserva de Laboratorios';

  inputLaboratorioNombre = "Seleccione el Laboratorio";


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
    this.CargarReserva();

  }
  GuardarCambios() {

    
    this.EliminarReserva();
    this.GuardarReserva();
    alert("Cambios guardados exitosamente");
    
  }
  EliminarReserva(){
    this.ListaReservasOriginal;
    this.scheduleData;
    console.log(this.scheduleData)
    console.log(this.ListaReservasOriginal.length+"---"+this.scheduleData.length);
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
   applyCategoryColor(args: EventRenderedArgs, currentView: View): void {
    let categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Agenda') {
        (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
}
}

