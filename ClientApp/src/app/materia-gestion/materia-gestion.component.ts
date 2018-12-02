import { Component, OnInit } from '@angular/core';
import { materiaServiceService } from '../materia-service/materia-service.service';

@Component({
  selector: 'app-materia-gestion',
  templateUrl: './materia-gestion.component.html',
  styleUrls: ['./materia-gestion.component.css']
})
export class MateriaGestionComponent implements OnInit {

  constructor(private serviceMateria:materiaServiceService) { }

  ngOnInit() {
  }

  inputMateria:any;
  inputCodigo:any;
  

  GuardarMateria(){
    
    this.serviceMateria.AddMateria(this.inputMateria,this.inputCodigo).subscribe(
      data=>{
        
      }
    )
  }

}
