import { Component, OnInit } from '@angular/core';
import { usuarioServiceService} from '../usuario-service/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private serviceUsuario: usuarioServiceService) { }
  ListaTodoUsuario:any;
  ObtenerTodoUsuario(){
    this.serviceUsuario.ListaTodosUsuarios().subscribe(
      
      data=>{
        this.ListaTodoUsuario=data;
      }

    )
  }

  ListaTiposUsuarios:any=this.serviceUsuario.ListaTipoPersona();
  TipoUsuario:any;
  ObtenerTipoUsuario(parametro:any){
    this.TipoUsuario=this.ListaTiposUsuarios.find(x => x.idtipopersona == parametro).nombre;
  }
      
    
  


  ngOnInit() {
    this.ObtenerTodoUsuario();
  }
  ListaParametro:any[] =["Nombre Completo","Identificación","Rol"];
  inputParametro="Elegir parámetro"
  CargarTipoParametro(parametro:any){
    this.inputParametro=parametro;

  }

}
