import { Component, OnInit } from '@angular/core';
import { usuarioServiceService} from '../usuario-service/usuario-service.service';
import { FilterpipePipe} from '../filterpipe.pipe';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private serviceUsuario: usuarioServiceService) { }
  busqueda:any;
  ListaTodoUsuario:any;
  ObtenerTodoUsuario(){
    this.serviceUsuario.ListaTodosUsuarios().subscribe(
      
      data=>{
        this.ListaTodoUsuario=data;
      }

    )
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
