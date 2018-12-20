import { Component, OnInit } from '@angular/core';
import { materiaServiceService} from '../materia-service/materia-service.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
idmateria:any;
  constructor(private serviceMateria: materiaServiceService ) {
    this.idmateria=0;
   }
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
 
  inputMateria:any;
  inputCodigo:any;
  CambiarValor(idmat:number){
    this.idmateria = idmat;
    this.cargarMateria();
    
  }  

  Acero(){
    this.idmateria = 0;
    this.inputMateria="";
    this.inputCodigo="";
  }  

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

  DeleteMateria(idmateria:number){
    
    if(confirm("SE ELIMINARA?")){

    
    this.serviceMateria.DeleteMateria(idmateria).subscribe(
      data=>{
       
        this.ObtenerTodasMaterias();

      }
    )
  }else{
    
  }
  }
  
  GuardarMateria() {
    if (this.idmateria == 0) {
      this.serviceMateria.AddMateria(this.inputMateria, this.inputCodigo).subscribe(
        data => {
          this.ObtenerTodasMaterias();
        }
      )
    }else{
      this.serviceMateria.EditMateria(this.idmateria, this.inputMateria, this.inputCodigo).subscribe(
        data=>{
          this.ObtenerTodasMaterias();
        }
      )
    }


  }


}


