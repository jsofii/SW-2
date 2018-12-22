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


export class LaboratorioAux {
    numero: number;
    nombre: string;
    
    constructor(numero:any, nombre:any){
        this.numero=numero;
      
        this.nombre=nombre;

    }   
    
}


export class MateriaAux {
    nombre: string;
    codigo: string;
    
    constructor(nombre:any, codigo:any){
        this.nombre=nombre;
      
        this.codigo=codigo;

    }   
    
}