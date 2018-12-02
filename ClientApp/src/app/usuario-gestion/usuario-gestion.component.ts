import { Component, OnInit } from '@angular/core';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';

@Component({
  selector: 'app-usuario-gestion',
  templateUrl: './usuario-gestion.component.html',
  styleUrls: ['./usuario-gestion.component.css']
})
export class UsuarioGestionComponent implements OnInit {

  constructor( private serviceUsuario:usuarioServiceService) { 
   
  }

  ngOnInit() {
    this.CargarTipoPersona();
  }
  inputUsuario:any;
  inputTipoPersona:any;
  inputTipoPersonaId:any;
  inputIdentificacion:any;
  ListaTipoPersona:any;
  inputTipoPersonaNombre="Seleccione un rol";
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

  GuardarPersona(){

    
    this.serviceUsuario.AddPersona(this.inputUsuario,this.inputIdentificacion, this.inputTipoPersonaId).subscribe(
      data=>{
        
      }
    )
  }

  

}
