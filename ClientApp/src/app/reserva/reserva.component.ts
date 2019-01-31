import { Component, OnInit } from '@angular/core';

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-ng-schedule';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './helper';
import { extend } from '@syncfusion/ej2-base';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';


Schedule.Inject(WorkWeek);

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class ReservaComponent implements OnInit {
  public scheduleData:Array<any>;
  public scheduleData2: any;
  public scheduleData3: any;
  constructor(private serviceLaboratorio: laboratorioServiceService) {
    this.scheduleData= new Array<any>();
    this.serviceLaboratorio.GetReservas().subscribe(
      data => {
        this.scheduleData2 = data;
        this.scheduleData3= this.scheduleData2;
        this.scheduleData3.forEach(element => {
          let tem = {
            Id: element.id,
            Subject: element.subject,
            StartTime: new Date(element.anio, element.mes, element.dia, element.hora, element.minutos),
            EndTime: new Date(element.aniofin, element.mesfin, element.diafin, element.horafin, element.minutosfin)

          }
          this.scheduleData.push(tem);
      
        });
      }
    )
    
    
  }
  ngOnInit() {

    this.CargarLaboratorios();
    let scheduleObj: Schedule = new Schedule({
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
        dataSource: this.scheduleData
      },
      eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
    });
    scheduleObj.timeScale.slotCount = 1;
    scheduleObj.appendTo('#Schedule');
  }

  title = 'Reserva de Laboratorios';

  inputLaboratorioNombre = "Seleccione el Laboratorio";
  inputLaboratorioID: any;

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
  }
  print() {
    
    console.log(this.scheduleData);
    // this.scheduleData.forEach(element => {
    //   console.log(element);
    // });
  }
}

