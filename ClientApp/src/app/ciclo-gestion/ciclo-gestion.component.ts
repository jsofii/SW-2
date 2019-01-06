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
  idciclo:any;
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

  
  CambiarValor(idcicl: number) {
    this.idciclo = idcicl;
    alert(this.idciclo);
    this.cargarCiclo();
    
  }

  GuardarCiclo() {
    
    if (this.idciclo == 0) {
      
    
      this.serviceCiclo.AddCiclo(this.inputCiclo, this.inputFechaInicio,this.inputFechaFin).subscribe(
        data => {
          if (data == null) {
            alert("ATENCIÓN: Ya existe un ciclo con ese nombre.")
          }else{
            
            alert("Ciclo registrado exitosamente!");
          }
          

        }
      )
    }else{
      
      alert(this.idciclo);
      this.serviceCiclo.EditCiclo(this.idciclo, this.inputCiclo, this.inputFechaInicio,this.inputFechaFin).subscribe(
        data=>{
          if (data == null) {
            alert("ATENCIÓN: Ya existe un ciclo con ese nombre.")
          }else{
            
          alert("Ciclo modificado exitosamente!");
          }
        }
      )
    }


  }

}
