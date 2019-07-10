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
  busquedalabo:any;
  constructor(private serviceLaboratorio: laboratorioServiceService) {
    this.idlaboratorio = 0;
    this.ListaTodosLaboratorios = new Array<any>();
    /*if(this.idlaboratorio!=0){
      this.cargarLaboratorio();
    }*/
  }
  ListaTodosLaboratorios: Array<any>;
  ngOnInit() {
    this.ObtenerTodosLaboratorios();
  }

  CambiarValor(idlab: number) {
    this.idlaboratorio = idlab;
    this.cargarLaboratorio();

  }

  Acero() {
    this.idlaboratorio = 0;
    this.inputNumero = 0;
    this.inputNombre = "";
  }


  lista: any;
  ObtenerTodosLaboratorios() {
    this.serviceLaboratorio.ListaTodosLaboratorios().subscribe(

      data => {
        this.lista = data;
        this.ListaTodosLaboratorios = this.lista;
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


  inputNumero: number;
  inputNombre: any;
  laboratorioAux: any;
  estadoAntesActualizar:any;
  cargarLaboratorio() {
    this.serviceLaboratorio.GetLaboratorioId(this.idlaboratorio).subscribe(
      data => {
        this.laboratorioAux = data;
        this.inputNumero = this.laboratorioAux.numero;
        this.inputNombre = this.laboratorioAux.nombre;
        this.estadoAntesActualizar=this.laboratorioAux.estado;
      }
    )
  }


  ActualizarEstado(idlabo: number, numero: any, nombre: any, estado: any) {
    this.serviceLaboratorio.EditLaboratorio(idlabo, numero, nombre, estado).subscribe(
      data => {
        this.ObtenerTodosLaboratorios();

      }
    )
  }

  laboaux: any;
  GuardarLaboratorio() {
    if (this.idlaboratorio == 0) {
      if (isNaN(this.inputNumero)) {
        alert('ATENCIÓN: "Número de laboratorio" solo acepta caracteres numericos');
      } else {
        if (/^[a-zA-Z- ]*$/.test(this.inputNombre) == false) {
          alert('ATENCIÓN: "Nombre de laboratorio" no acepta caracteres especiales o numericos.');
        } else {
          this.serviceLaboratorio.AddLaboratorio(this.inputNumero, this.inputNombre, "ACTIVO").subscribe(

            data => {
              if (data == null) {
                alert('ATENCIÓN: Ya existe un laboratorio con ese número.');
              } else {
                alert('Laboratorio registrado.');
              }
              this.ObtenerTodosLaboratorios();
            }
          )
        }
      }
    } else {
      if (isNaN(this.inputNumero)) {
        alert('ATENCIÓN: "Número de laboratorio" solo acepta caracteres numericos');
      } else {
        if (/^[a-zA-Z- ]*$/.test(this.inputNombre) == false) {
          alert('ATENCIÓN: "Nombre de laboratorio" no acepta caracteres especiales o numericos.');
        } else {

          const index = this.ListaTodosLaboratorios.map(e => e.idlaboratorio).indexOf(this.idlaboratorio);
          this.laboaux = this.ListaTodosLaboratorios[index];
          this.ListaTodosLaboratorios.splice(index, 1);
          const index2 = this.ListaTodosLaboratorios.map(x => x.numero).indexOf(Number(this.inputNumero));

          if (index2 == -1) {
            this.serviceLaboratorio.EditLaboratorio(this.idlaboratorio, this.inputNumero, this.inputNombre, this.estadoAntesActualizar).subscribe(
              data => {
                if (data == null) {
                  alert('ATENCIÓN: Ya existe un laboratorio con ese número..');
                } else {
                  alert('Información de laboratorio actualizada.');
                }
                this.ObtenerTodosLaboratorios();
              }
            )
          } else {
            alert('ATENCIÓN: Ya existe un laboratorio con ese número.');
            this.ObtenerTodosLaboratorios();
          }
        }
        //this.cargarLaboratorio();

      }


    }




  }

  



  parametroBusqueda: any;

  selectParametro(event: any) {
    this.parametroBusqueda = event.target.value;
  }
}
