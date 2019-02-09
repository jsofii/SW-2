import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { loginServiceService } from '../login-service/login-service.service';
import { Router, ActivatedRoute, ParamMap, UrlHandlingStrategy } from '@angular/router';
import { usuarioServiceService } from '../usuario-service/usuario-service.service';
import { error } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login_service: loginServiceService, private router: Router, private usuarioService:usuarioServiceService) { }
  @Output() logIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() nombre: EventEmitter<any> = new EventEmitter<any>();

  log = false;
  usuario: any;
  password: any;
  correo:any;
  ngOnInit() {
  }
  onKeydown(event) {

   // this.valueChanged();

  }
  existeUsuario(){
    this.usuario;
    this.correo;
    if(this.correo!=null){
      this.usuarioService.existeUsuario(this.correo).subscribe(
        data=>{
          if(data){
            this.usuarioService.temporalPass(this.correo).subscribe(
                data=>{
                    alert('Nueva contraseña enviada. Revise su correo electrónico.');
                }
            )
          }else{
            alert("El correo ingresado no pertenece a ningún usuario! Verifique y reintente");
          }
        }
      )
    }
  }
  valueChanged(): void { // You can give any function name

    console.log("usuario", this.usuario);
    console.log("password", this.password);
    let flag: any;
    // this.login_service.CargarUsuarioContraseña(this.usuario, this.password);
    this.login_service.verificar(this.usuario, this.password).subscribe(
      res => {
        flag = res;
        this.log = flag;

        this.logIn.emit(this.log);

        var user = {
          nombre: this.usuario,
          password: this.password,
        }
        this.router.navigateByUrl("/laboratorio");

        // this.nombre.emit(user);
      },
      err => {

        // this.error=true;
        this.log = false;
      }
    );
  };

}
