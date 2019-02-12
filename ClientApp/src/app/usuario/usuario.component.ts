import { Component, OnInit } from '@angular/core';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { FilterpipePipe } from '../filterpipe.pipe';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { error } from 'util';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private serviceUsuario: usuarioServiceService) {
    this.CargarTipoPersona();
    this.CargarUsuarios();
  }
  busqueda: any;
  ListaTodoUsuario: any;
  ObtenerTodoUsuario() {
    this.serviceUsuario.ListaTodosUsuarios().subscribe(

      data => {
        this.ListaTodoUsuario = data;
      }

    )
  }

  inputEstado: string = "";
  inputNombreUsuario: any;
  inputPassword: any;
  idpersonaSelected: number;
  inputTipoPersona: any;
  inputTipoPersonaId: any;
  inputIdentificacion: any;

  ListaTipoPersona: any;
  inputTipoPersonaNombre = "Seleccione un estado";


  //para ingresar una nueva persona:
  inputNombrePersona: any;
  inputIdentificacionPersonal: any;
  inputTipoPersonaAoEID: number;
  inputCorreo: any;





  select(estado: string) {
    this.inputEstado = estado;
  }
  seleccionarPersona(idpersona: number) {
    this.idpersonaSelected = idpersona;
    this.inputNombreUsuario = "";
    this.inputPassword = "";
    this.inputEstado = "";
  }
  GuardarUsuario() {
    this.serviceUsuario.AddUser(this.idpersonaSelected, this.inputNombreUsuario, this.inputPassword, this.inputEstado).subscribe(
      data => {

        if (data == null) {
          alert("User Name ya existente.");
        } else {
          alert("USUARIO AGREGADO");
          this.LimpiarIngresoUsuario();
          this.CargarUsuarios();
        }



      }
    )
  }
  listaUsuarios: any;
  CargarUsuarios() {
    this.serviceUsuario.ListaUsuario().subscribe(
      data => {
        this.listaUsuarios = data;

      }
    )
  }
  usuarioEditar: any;
  idUsuario: number;
  CargarUsuario(idusuario: number) {
    this.serviceUsuario.CargarUsuario(idusuario).subscribe(
      data => {
        this.usuarioEditar = data;
        this.idUsuario = this.usuarioEditar.idusuario;
        this.inputNombreUsuario = this.usuarioEditar.nombreusuario;
        this.inputPassword = this.usuarioEditar.password,
          this.inputEstado = this.usuarioEditar.estado
      },
      error => {
        alert("¡Error! Revise los datos por favor");
      }
    )
  }

  EliminarUsuario(idusuario: number) {
    this.serviceUsuario.RemoveUsuario(idusuario).subscribe(
      data => {
        alert("Usuario Eliminado");
        this.CargarUsuarios();
      },
      error => {
        alert("No es posible eliminar usuario");
      }
    )
  }

  useraux: any;
  EditarUsuario() {

    const index = this.listaUsuarios.map(e => e.idusuario).indexOf(this.idUsuario);
    this.useraux = this.listaUsuarios[index];
    this.listaUsuarios.splice(index, 1);
    const index2 = this.listaUsuarios.map(x => x.nombreusuario).indexOf(String(this.inputNombreUsuario));

    if (index2 == -1) {
      this.serviceUsuario.EditarUsuario(this.idUsuario, this.inputNombreUsuario, this.inputPassword, this.inputEstado).subscribe(
        data => {

          this.CargarUsuarios();
          alert('Usuario actualizado.');
        },
        error => {
          alert("Error al editar usuario");
        }
      )
    } else {
      alert("ATENCIÓN: Ya existe ese User Name.");
      this.CargarUsuarios();
    }

  }


  LimpiarIngresoUsuario() {
    this.inputEstado = "";
    this.inputNombreUsuario = ""
    this.inputPassword = "";

  }
  CargarTipoPersona() {
    this.serviceUsuario.ListaTipoPersona().subscribe(
      data => {
        this.ListaTipoPersona = data;
      }
    )
  }
  CargarTipoPersonaId(tipoPersonaId: any, nombre: any) {
    this.inputTipoPersonaNombre = nombre;
    this.inputTipoPersonaId = tipoPersonaId;
  }




  //guardar persona
  inputTipoPersonaString = "";
  GuardarPersona() {


    this.serviceUsuario.AddPersona(this.inputNombrePersona, this.inputIdentificacionPersonal, this.inputTipoPersonaAoEID, this.inputCorreo).subscribe(
      data => {
        if (/^[a-zA-Z- ]*$/.test(this.inputNombrePersona) == false) {
          alert('ATENCIÓN: "Nombre de persona" no acepta caracteres especiales o numericos.');
        } else {
          if (data != null) {
            alert('Nueva persona registrada.')
            this.inputNombrePersona = "";
            this.inputIdentificacionPersonal = "";
            this.inputCorreo = "";
            this.inputTipoPersonaString = "";
          } else {
            alert('Ya existe una persona registrada con ese correo electrónico.');
          }
        }

        this.ObtenerTodoUsuario();
      }
    )
  }


  selectTipoPersona(id: number) {
    this.inputTipoPersonaAoEID = id;
    if (id == 1) {
      this.inputTipoPersonaString = "Administrador";
    } else {
      this.inputTipoPersonaString = "Profesor";
    }
  }






  ngOnInit() {
    this.ObtenerTodoUsuario();
  }
  ListaParametro: any[] = ["Nombre Completo", "Identificación", "Rol"];
  inputParametro = "Elegir parámetro"
  CargarTipoParametro(parametro: any) {
    this.inputParametro = parametro;

  }



  parametroBusqueda: any;
  selectParametro(event: any) {
    this.parametroBusqueda = event.target.value;
  }
}
