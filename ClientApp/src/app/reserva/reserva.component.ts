import { Component,OnInit } from '@angular/core';

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-ng-schedule';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './helper';
import { extend } from '@syncfusion/ej2-base';


Schedule.Inject(WorkWeek);

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.css'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class ReservaComponent implements OnInit{
  public scheduleData: any;
  constructor() {
     
  }
  ngOnInit(){
    let scheduleObj: Schedule = new Schedule({
        
        workDays: [1, 2,3, 4,5,6],
        currentView: 'WorkWeek',
        startHour: '07:00',
        endHour: '21:00',
        workHours:  {
            highlight: false
        },
        views: [ 'WorkWeek'],
        eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
    });
    scheduleObj.timeScale.slotCount=1;
    scheduleObj.appendTo('#Schedule');
  }
    
  title = 'Reserva de Laboratorios';
  
}

