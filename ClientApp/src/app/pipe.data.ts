import { createAotUrlResolver, core } from "@angular/compiler";

export class PersonaAux {
    nombrecompleto: string;
    identificacionpersonal: string;
    correo:string;
    nombre:string ;
    constructor(nombre:any, identificacion:any, correo:any, rol:any){
        this.nombrecompleto=nombre;
        this.identificacionpersonal=identificacion;
        this.correo=correo;
        this.nombre=rol;

    }   
    
}