import { Component, OnInit } from '@angular/core';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  idlaboratorio:any;
  constructor(private serviceLaboratorio: laboratorioServiceService) {
    this.idlaboratorio = 0;
    /*if(this.idlaboratorio!=0){
      this.cargarLaboratorio();
    }*/
   }
  ListaTodosLaboratorios: any;
  ngOnInit() {
    this.ObtenerTodosLaboratorios();
  }

  CambiarValor(idlab:number){
    this.idlaboratorio = idlab;
  }  

  Acero(){
    this.idlaboratorio = 0;
  }  



  ObtenerTodosLaboratorios() {
    this.serviceLaboratorio.ListaTodosLaboratorios().subscribe(

      data => {
        this.ListaTodosLaboratorios = data;
      }

    )
  }
  ListaParametro: any[] = ["Número", "Nombre"];
  inputParametro = "Elegir parámetro"
  CargarTipoParametro(parametro: any) {
    this.inputParametro = parametro;

  }

  DeleteLaboratorio(idlaboratorio: number) {

    if (confirm("¿Se elimina el laboratorio?")) {


      this.serviceLaboratorio.DeleteLaboratorio(idlaboratorio).subscribe(
        data => {

          this.ObtenerTodosLaboratorios();

        }
      )
    } else {

    }
  }


  inputNumero: any;
  inputNombre: any;
  laboratorioAux: any;

  cargarLaboratorio() {
    this.serviceLaboratorio.GetLaboratorioId(this.idlaboratorio).subscribe(
      data => {
        this.laboratorioAux = data;
        this.inputNumero = this.laboratorioAux.Numero;
        this.inputNombre = this.laboratorioAux.Nombre;
      }
    )
  }


  GuardarLaboratorio() {
    if (this.idlaboratorio == 0) {
      this.serviceLaboratorio.AddLaboratorio(this.inputNumero, this.inputNombre).subscribe(
        data => {
            this.ObtenerTodosLaboratorios();
        }
      )
    }else{
      //this.cargarLaboratorio();
      
      this.serviceLaboratorio.EditLaboratorio(this.idlaboratorio, this.inputNumero, this.inputNombre).subscribe(
        data=>{
          this.ObtenerTodosLaboratorios();
        }
      )
    }


  }




}
