import { Component, OnInit } from '@angular/core';
import { laboratorioServiceService } from '../laboratorio-service/laboratorio-service.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  idlaboratorio: any;
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

  CambiarValor(idlab: number) {
    this.idlaboratorio = idlab;
    this.cargarLaboratorio();

  }

  Acero() {
    this.idlaboratorio = 0;
    this.inputNumero = "";
    this.inputNombre = "";
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
        this.inputNumero = this.laboratorioAux.numero;
        this.inputNombre = this.laboratorioAux.nombre;
      }
    )
  }


  GuardarLaboratorio() {
    if (this.idlaboratorio == 0) {
      if(isNaN(this.inputNumero)){
        alert('ATENCIÓN: "Número de laboratorio" solo acepta caracteres numericos');
     }else {
        if(/^[a-zA-Z-]*$/.test(this.inputNombre) == false) {
          alert('ATENCIÓN: "Nombre de laboratorio" no acepta caracteres especiales o numericos.');
        }else{
          this.serviceLaboratorio.AddLaboratorio(this.inputNumero, this.inputNombre).subscribe(

            data => {
              if (data == null) {
                alert('ATENCIÓN: Ya existe un laboratorio con ese número.');
              }
              this.ObtenerTodosLaboratorios();
            }
          )
        }
      }
  } else {
    if(isNaN(this.inputNumero)){
      alert('ATENCIÓN: "Número de laboratorio" solo acepta caracteres numericos');
   }else {
      if(/^[a-zA-Z-]*$/.test(this.inputNombre) == false) {
        alert('ATENCIÓN: "Nombre de laboratorio" no acepta caracteres especiales o numericos.');
      }else{
        this.serviceLaboratorio.EditLaboratorio(this.idlaboratorio, this.inputNumero, this.inputNombre).subscribe(
          data => {
            if (data == null) {
              alert('ATENCIÓN: Ya existe un laboratorio con ese número.');
            }
            this.ObtenerTodosLaboratorios();
          }
        )
      }
   }
    //this.cargarLaboratorio();
    
    }


  }




}
