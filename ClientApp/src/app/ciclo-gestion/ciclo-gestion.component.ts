import { Component, OnInit } from '@angular/core';
import { cicloServiceService } from '../ciclo-service/ciclo-service.service';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-ciclo-gestion',
  templateUrl: './ciclo-gestion.component.html',
  styleUrls: ['./ciclo-gestion.component.css']
})
export class CicloGestionComponent implements OnInit {
  idciclo: any;
  constructor(private serviceCiclo: cicloServiceService, private activeRoute: ActivatedRoute) {



  }
  ngOnInit() {
    this.idciclo = this.activeRoute.snapshot.params.idciclo;
    if (this.idciclo != 0) {
      this.cargarCiclo();
    }
  }

  inputCiclo: any;
  inputFechaInicio: any;
  inputFechaFin: any;
  cicloAux: any;
  inputEstado: any = "Seleccione un estado";

  cargarCiclo() {
    this.serviceCiclo.GetCicloId(this.idciclo).subscribe(
      data => {
        this.cicloAux = data;
        this.inputCiclo = this.cicloAux.nombre;
        this.inputFechaInicio = this.cicloAux.fechainicio;
        this.inputFechaFin = this.cicloAux.fechafin;
        this.inputEstado = this.cicloAux.estado;
      }
    )
  }


  CambiarValor(idcicl: number) {
    this.idciclo = idcicl;
    //alert(this.idciclo);
    this.cargarCiclo();

  }

  select(estado: any) {
    this.inputEstado = estado;
  }

  GuardarCiclo() {

    if (this.idciclo == 0) {

      if (this.inputEstado == "Seleccione un estado") {
        this.inputEstado = "ACTIVO";
      }
      this.serviceCiclo.AddCiclo(this.inputCiclo, this.inputFechaInicio, this.inputFechaFin, this.inputEstado).subscribe(
        data => {
          if (data == null) {
            alert("ATENCIÓN: Ya existe un ciclo con ese nombre.")
          } else {
            this.inputCiclo = "";
            this.inputFechaFin = "";
            this.inputFechaInicio = "";
            this.inputEstado = "Seleccione un estado";
            alert("Ciclo registrado exitosamente!");
          }


        }
      )
    } else {

      alert(this.idciclo);
      this.serviceCiclo.EditCiclo(this.idciclo, this.inputCiclo, this.inputFechaInicio, this.inputFechaFin, this.inputEstado).subscribe(
        data => {
          if (data == null) {
            alert("ATENCIÓN: Ya existe un ciclo con ese nombre.")
          } else {

            alert("Ciclo modificado exitosamente!");
          }
        }
      )
    }


  }

}
