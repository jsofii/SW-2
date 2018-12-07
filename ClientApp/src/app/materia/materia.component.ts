import { Component, OnInit } from '@angular/core';
import { materiaServiceService} from '../materia-service/materia-service.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor(private serviceMateria: materiaServiceService ) { }
  ListaTodasMaterias:any;

  ObtenerTodasMaterias(){
    this.serviceMateria.ListaTodasMaterias().subscribe(
      
      data=>{
        this.ListaTodasMaterias=data;
      }

    )
  }

  ngOnInit() {
    this.ObtenerTodasMaterias();
  }
  ListaParametro:any[] =["Código","Nombre"];
  inputParametro="Elegir parámetro"
  CargarTipoParametro(parametro:any){
    this.inputParametro=parametro;

  }

  DeleteMateria(idmateria:number){
    this.serviceMateria.DeleteMateria(idmateria).subscribe(
      data=>{
        this.ObtenerTodasMaterias();

      }
    )
  }



}


