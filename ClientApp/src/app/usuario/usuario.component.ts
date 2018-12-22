import { Component, OnInit } from '@angular/core';
import { usuarioServiceService} from '../usuario-service/usuario-service.service';
import { FilterpipePipe} from '../filterpipe.pipe';
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
  busqueda:any;
  ListaTodoUsuario:any;
  ObtenerTodoUsuario(){
    this.serviceUsuario.ListaTodosUsuarios().subscribe(
      
      data=>{
        this.ListaTodoUsuario=data;
      }

    )
  }
  
  inputEstado:string="";
  inputNombreUsuario:any;
  inputPassword:any;
  idpersonaSelected:number;
  inputTipoPersona:any;
  inputTipoPersonaId:any;
  inputIdentificacion:any;
  inputCorreo:any;
  ListaTipoPersona:any;
  inputTipoPersonaNombre="Seleccione un estado";
  select(estado:string){
    this.inputEstado=estado;
  }
  seleccionarPersona(idpersona:number){
    this.idpersonaSelected=idpersona;
  }
  GuardarUsuario(){
    this.serviceUsuario.AddUser(this.idpersonaSelected,this.inputNombreUsuario,this.inputPassword, this.inputEstado).subscribe(
      data=>{
        if(data=="TRUE"){
          alert("USUARIO AGREGADO");
          this.LimpiarIngresoUsuario();
          this.CargarUsuarios();

        }else{
          alert(data);
        }
      }
    )
  }
  listaUsuarios:any;
  CargarUsuarios(){
    this.serviceUsuario.ListaUsuario().subscribe(
      data=>{
        this.listaUsuarios=data;

      }
    )
  }
  usuarioEditar:any;
  idUsuario:number;
  CargarUsuario(idusuario:number){
    this.serviceUsuario.CargarUsuario(idusuario).subscribe(
      data=>{
        this.usuarioEditar=data;
        this.idUsuario=this.usuarioEditar.idusuario;
        this.inputNombreUsuario=this.usuarioEditar.nombreusuario;
        this.inputPassword=this.usuarioEditar.password,
        this.inputEstado=this.usuarioEditar.estado
      },
      error=>{
        alert("¡Error! Revise los datos por favor");
      }
    )
  }
  
  EliminarUsuario(idusuario:number){
    this.serviceUsuario.RemoveUsuario(idusuario).subscribe(
      data=>{
        alert("Usuario Eliminado");
        this.CargarUsuarios();
      },
      error=>{
        alert("No es posible eliminar usuario");
      }
    )
  }
  EditarUsuario(){
    this.serviceUsuario.EditarUsuario(this.idUsuario, this.inputNombreUsuario, this.inputPassword, this.inputEstado).subscribe(
      data=>{
        this.CargarUsuarios();
      },
      error=>{
        alert("Error al editar usuario");
      }
    )
  }
  LimpiarIngresoUsuario(){
    this.inputEstado="";
    this.inputNombreUsuario=""
    this.inputPassword="";
    
  }
  CargarTipoPersona(){
    this.serviceUsuario.ListaTipoPersona().subscribe(
      data=>{
        this.ListaTipoPersona=data;
      }
    )
  }
  CargarTipoPersonaId(tipoPersonaId:any, nombre:any)
  {
    this.inputTipoPersonaNombre=nombre;
    this.inputTipoPersonaId=tipoPersonaId;
  }

  // GuardarPersona(){

    
  //   this.serviceUsuario.AddPersona(this.inputUsuario,this.inputIdentificacion, this.inputTipoPersonaId,this.inputCorreo).subscribe(
  //     data=>{
        
  //     }
  //   )
  // }

  

  
      
    
  


  ngOnInit() {
    this.ObtenerTodoUsuario();
  }
  ListaParametro:any[] =["Nombre Completo","Identificación","Rol"];
  inputParametro="Elegir parámetro"
  CargarTipoParametro(parametro:any){
    this.inputParametro=parametro;

  }

}
