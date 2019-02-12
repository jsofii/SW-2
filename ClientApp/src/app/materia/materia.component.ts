import { Component, OnInit } from '@angular/core';
import { materiaServiceService } from '../materia-service/materia-service.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  idmateria: any;
  constructor(private serviceMateria: materiaServiceService) {
    this.idmateria = 0;
  }
  ListaTodasMaterias: any;

  ObtenerTodasMaterias() {
    this.serviceMateria.ListaMateriasPorCarrera().subscribe(

      data => {
        this.ListaTodasMaterias = data;
      }

    )
  }

  //ListaCarreras: any[] = ["Ingeniería en Sistemas", "Ingeniería en Computación", "Ingeniería en Software"];
  inputCarrera: any;



  ngOnInit() {
    this.ObtenerTodasMaterias();
  }
  ListaParametro: any[] = ["Código", "Nombre"];
  inputParametro = "Elegir parámetro"
  CargarTipoParametro(parametro: any) {
    this.inputParametro = parametro;

  }

  inputMateria: any;
  inputCodigo: any;
  carreraAux: number;

  select(aux: number) {
    this.carreraAux = aux;
    if (aux == 1) {
      this.inputCarrera = "Ingeniería en Sistemas";
    } else if (aux == 2) {
      this.inputCarrera = "Ingeniería en Computación";
    } else if (aux == 3) {
      this.inputCarrera = "Ingeniería en Software";
    }
  }

  CambiarValor(idmat: number) {
    this.idmateria = idmat;
    this.cargarMateria();
    this.inputCarrera = "";
    /*  if (this.carreraAux== 1) {
       this.inputCarrera = "Ingeniería en Sistemas";
     } else if (this.carreraAux == 2) {
       this.inputCarrera = "Ingeniería en Computación";
     } else if (this.carreraAux == 3) {
       this.inputCarrera = "Ingeniería en Software";
     }*/
  }

  Acero() {
    this.idmateria = 0;
    this.inputMateria = "";
    this.inputCodigo = "";
    this.inputCarrera = "";
    this.carreraAux = 0;
  }


  materiaAux: any;
  estadoAntesActualizar:any;
  cargarMateria() {
    this.serviceMateria.GetMateriaId(this.idmateria).subscribe(
      data => {
        this.materiaAux = data;
        this.inputMateria = this.materiaAux.nombre;
        this.inputCodigo = this.materiaAux.codigo;
        this.carreraAux = this.materiaAux.carrera;
        this.estadoAntesActualizar=this.materiaAux.estado;
      }
    )
  }

  DeleteMateria(idmateria: number) {

    if (confirm("¿SE ELIMINARÁ?")) {


      this.serviceMateria.DeleteMateria(idmateria).subscribe(
        data => {

          this.ObtenerTodasMaterias();

        }
      )
    } else {

    }
  }


  ActualizarEstadoMateria(idmateria:number,nombre:any,codigo:any,carrera:number,estado:any){
    this.serviceMateria.EditMateria(idmateria,nombre,codigo,carrera,estado).subscribe(
      data => {

        this.ObtenerTodasMaterias();

      }
    )
  }


  materiaaux:any;
  estadoMAteria="ACTIVO";
  GuardarMateria() {
    if (this.idmateria == 0) {
      this.serviceMateria.AddMateria(this.inputMateria, this.inputCodigo, this.carreraAux,this.estadoMAteria).subscribe(
        data => {

          if (data == null) {
            alert("ATENCIÓN: Ya existe una materia con ese código.")
          }else{
            alert("Materia registrada.")
          }
          this.ObtenerTodasMaterias();
        }
      )
    } else {
      
      const index = this.ListaTodasMaterias.map(e => e.idmateria).indexOf(this.idmateria);
      this.materiaaux = this.ListaTodasMaterias[index];
      this.ListaTodasMaterias.splice(index, 1);
      const index2 = this.ListaTodasMaterias.map(x => x.codigo).indexOf(String(this.inputCodigo));

      if(index2==-1){
        this.serviceMateria.EditMateria(this.idmateria, this.inputMateria, this.inputCodigo, this.carreraAux,this.estadoAntesActualizar).subscribe(
          data => {
            if (data == null) {
              //alert("ATENCIÓN: Ya existe una materia con ese código.");
            }else{
              alert("Materia actualizada.")
            }
            this.ObtenerTodasMaterias();
          }
        )
      }else{
        alert("ATENCIÓN: Ya existe una materia con ese código.");
        this.ObtenerTodasMaterias();
      }
      
    }


  }


  parametroBusqueda:any;

  selectParametro(event:any){
    this.parametroBusqueda=event.target.value;
  }


}


