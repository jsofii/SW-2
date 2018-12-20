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


  inputMateria: any;
  inputCodigo: any;
  materiaAux: any;

  cargarCiclo() {
    this.serviceCiclo.GetCicloId(this.idciclo).subscribe(
      data => {
        this.materiaAux = data;
        this.inputMateria = this.materiaAux.nombre;
        this.inputCodigo = this.materiaAux.codigo;
      }
    )
  }

  ngOnInit() {
   
  }
  /*GuardarMateria() {
    if (this.idmateria == 0) {
      this.serviceMateria.AddMateria(this.inputMateria, this.inputCodigo).subscribe(
        data => {

        }
      )
    }else{
      this.serviceMateria.EditMateria(this.idmateria, this.inputMateria, this.inputCodigo).subscribe(
        data=>{

        }
      )
    }


  }*/

}
