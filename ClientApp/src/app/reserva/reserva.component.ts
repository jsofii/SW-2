import { Component } from '@angular/core';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-ng-schedule';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.css'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class ReservaComponent {
  public scheduleData: any;
  constructor() {
      this.scheduleData = [{
          Id: 100, Subject: "Bering Sea Gold", StartTime: new Date(2014, 4, 5, 10, 0),
          EndTime: new Date(2014, 4, 5, 11, 0), Description: "", AllDay: false, Recurrence: false, Categorize: "1,3"
      },
      {
          Id: 101, Subject: "Bering Sea Gold", StartTime: new Date(2014, 4, 2, 16, 0),
          EndTime: new Date(2014, 4, 2, 17, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "2,5"
      },
      {
          Id: 102, Subject: "What Happened Next?", StartTime: new Date(2014, 4, 4, 1, 0),
          EndTime: new Date(2014, 4, 4, 1, 30), Description: "", AllDay: false, Recurrence: false, Categorize: "3,6"
      }];
  }
    // constructor(private data: DataService) {
        
    // }
    // public products = [];
    // public selectedDate: Date = new Date(2018, 1, 15);
    // public eventSettings: EventSettingsModel ;
    // ngOnInit(): void {
    //     this.eventSettings = { dataSource: <Object[]>extend([], this.data.eventsData, null, true) };
    //     //this.data.loadGroupsFollowed()
    //     //    .subscribe(success => {
    //     //        if (success) {
    //     //            this.eventSettings = { dataSource: <Object[]>extend([], this.data.eventsData, null, true) };
    //     //        }
    //     //    });
    // }
  title = 'Ameesssst';
  
}
