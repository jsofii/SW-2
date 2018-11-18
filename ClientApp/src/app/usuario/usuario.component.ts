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
  ngOnInit() {
    this.ObtenerTodoUsuario();
  }

}
