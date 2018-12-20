import { Component, OnInit } from '@angular/core';
import { cicloServiceService } from '../ciclo-service/ciclo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciclo-gestion',
  templateUrl: './ciclo-gestion.component.html',
  styleUrls: ['./ciclo-gestion.component.css']
})
export class CicloGestionComponent implements OnInit {
  idciclo: any;
  constructor(private serviceCiclo: cicloServiceService, private activeRoute: ActivatedRoute) {
    this.idciclo = this.activeRoute.snapshot.params.idciclo;
    if (this.idciclo != 0) {
      this.cargarCiclo();
    }
  }


  inputCiclo: any;
  inputFechaInicio: any;
  inputFechaFin: any; 
  cicloAux: any;

  cargarCiclo() {
    this.serviceCiclo.GetCicloId(this.idciclo).subscribe(
      data => {
        this.cicloAux = data;
        this.inputCiclo = this.cicloAux.nombre;
        this.inputFechaInicio = this.cicloAux.fechainicio;
        this.inputFechaFin = this.cicloAux.fechafin;
      }
    )
  }

  ngOnInit() {
   
  }
  GuardarCiclo() {
    if (this.idciclo == 0) {
      this.serviceCiclo.AddCiclo(this.inputCiclo, this.inputFechaInicio,this.inputFechaFin).subscribe(
        data => {

        }
      )
    }else{
      this.serviceCiclo.EditCiclo(this.idciclo, this.inputCiclo, this.inputFechaInicio,this.inputFechaFin).subscribe(
        data=>{

        }
      )
    }


  }

}
