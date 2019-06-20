import { Component, OnInit } from '@angular/core';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { horarioServiceService } from '../horario-service/horario-service.service';
import { Schedule, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from '../reserva/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.CargarLaboratorios();
  }
  public scheduleData: Array<any>;
  public scheduleData2: any;
  public scheduleData3: Array<any>;
  public ListaReservasOriginal: Array<any>;
  cont: number = 0;
  inputLaboratorioID: any;
  scheduleObj: any=null;
  inputLaboratorioNombre = "Seleccione el Laboratorio";
  ListaLaboratorios: any;
  constructor(private serviceLaboratorio: laboratorioServiceService, private serviceHorario: horarioServiceService) {


  }


  CargarLaboratoriosID(idlaboratorio: any, nombre: any) {
    this.inputLaboratorioNombre = nombre;
    this.inputLaboratorioID = idlaboratorio;
    this.CargarReserva();

  }
  
  CargarLaboratorios() {
    this.serviceLaboratorio.ListaLaboratoriosActivos().subscribe(
      data => {
        this.ListaLaboratorios = data;

      }
    )
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
            CategoryColor:"#4682B4"
            
            

          }
          if(element.until!=null){
            tem['RecurrenceRule']=element.until;
          }
          if(element.tipo=='H'){
            tem['IsReadonly']=true;
            tem['CategoryColor']="#20B2AA"
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
          readonly:true,
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
}
