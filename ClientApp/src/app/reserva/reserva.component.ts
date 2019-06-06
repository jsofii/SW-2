import { Component, OnInit } from '@angular/core';

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-ng-schedule';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './helper';
import { extend } from '@syncfusion/ej2-base';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { elementEnd } from '@angular/core/src/render3/instructions';
import{horarioServiceService} from '../horario-service/horario-service.service'


Schedule.Inject(WorkWeek);

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
        this.fechaFin.getMinutes(), this.x.Subject, this.inputLaboratorioID,"R",fechaUntil).subscribe(
          data => {

          }
        )
      this.tamaño--;


    }

  }
  ngOnInit() {

    this.CargarLaboratorios();
    //  this.scheduleObj= new Schedule({
    //   width: 'auto',
    //   height: 'auto',
    //   workDays: [1, 2, 3, 4, 5, 6],
    //   currentView: 'WorkWeek',
    //   startHour: '07:00',
    //   endHour: '21:00',
    //   workHours: {
    //     highlight: false
    //   },

    //   views: ['WorkWeek'],
    //   eventSettings: {
    //     dataSource: this.scheduleData,

    //   },
    //   eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, this.scheduleObj.currentView)
    // });
    // this.scheduleObj.timeScale.slotCount = 1;
    // this.scheduleObj.appendTo('#Schedule');
  }

  title = 'Reserva de Laboratorios';

  inputLaboratorioNombre = "Seleccione el Laboratorio";


  ListaLaboratorios: any;

  CargarLaboratorios() {
    this.serviceLaboratorio.ListaTodosLaboratorios().subscribe(
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

    
    this.GuardarReserva();
    this.EliminarReserva();
    
  }
  EliminarReserva(){
    this.ListaReservasOriginal;
    this.scheduleData;
    console.log(this.scheduleData)
    console.log(this.ListaReservasOriginal.length+"---"+this.scheduleData.length);
    this.ListaReservasOriginal.forEach(element => {
      const index = this.scheduleData.map(e => e.Id).indexOf(element.id)
      if(index==-1){
        this.serviceLaboratorio.DeleteReserva(element.id).subscribe(
          )
          data=>{
            
          }
      }
      
    });
  }
}

