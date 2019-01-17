import { Component, OnInit } from '@angular/core';
import { materiaServiceService } from '../materia-service/materia-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materia-gestion',
  templateUrl: './materia-gestion.component.html',
  styleUrls: ['./materia-gestion.component.css']
})
export class MateriaGestionComponent implements OnInit {
  idmateria: any;
  constructor(private serviceMateria: materiaServiceService, private activeRoute: ActivatedRoute) {
    this.idmateria = this.activeRoute.snapshot.params.idmateria;
    if (this.idmateria != 0) {
      this.cargarMateria();
    }
  }

  ngOnInit() {
  }

  inputMateria: any;
  inputCodigo: any;
  materiaAux: any;

  cargarMateria() {
    this.serviceMateria.GetMateriaId(this.idmateria).subscribe(
      data => {
        this.materiaAux = data;
        this.inputMateria = this.materiaAux.nombre;
        this.inputCodigo = this.materiaAux.codigo;
      }
    )
  }
 /* GuardarMateria() {
    if (this.idmateria == 0) {
      this.serviceMateria.AddMateria(this.inputMateria, this.inputCodigo,1).subscribe(
        data => {

        }
      )
    }else{
     /* this.serviceMateria.EditMateria(this.idmateria, this.inputMateria, this.inputCodigo).subscribe(
        data=>{

        }
      )*/
   /* }


  }*/

}
