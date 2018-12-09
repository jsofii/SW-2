import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  log: boolean = false;
  public nombre: string;
  public name = " ";
  public password: any;
  public idComunidad:number;
  public user:any;
  
  Enter(event: boolean) {
    this.log = event;
  }
  Nombre(event: any) {
    this.name = event.nombre;
    this.password= event.password;
    this.user={
      name:this.name,
      password:this.password
    }

    
  }
  IdComunidad(event: number){
    this.idComunidad=event;
  }

}

