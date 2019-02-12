import { createAotUrlResolver, core } from "@angular/compiler";

export class PersonaAux {
    nombrecompleto: string;
    identificacionpersonal: string;
    correo: string;
    nombre: string;
    constructor(nombre: any, identificacion: any, rol: any, correo: any) {
        this.nombrecompleto = nombre;
        this.identificacionpersonal = identificacion;
        this.nombre = rol;
        this.correo = correo;


    }

}


export class LaboratorioAux {

    nombre: string;
    numero: string;
    constructor(numero: any, nombre: any) {
        this.numero = numero;

        this.nombre = nombre;

    }

}

export class LaboratorioAux2 {

    nombre: string;
    numero: string;
    constructor(numero: any, nombre: any) {
        this.numero = numero;

        this.nombre = nombre;

    }

}


export class MateriaAux {
    nombreM: string;
    codigo: string;
    nombreC: string;

    constructor(nombreM: any, codigo: any, nombreC: any) {
        this.nombreM = nombreM;

        this.codigo = codigo;

        this.nombreC = nombreC;


    }

}


export class UsuarioAux {
    nombreusuario: string;

    constructor(nombre: any) {
        this.nombreusuario = nombre;



    }

}


export class CicloAux {
    nombre: string;
    fechainicio:string;
    fechafin:string;

    constructor(nombre: any,fechainicio:any,fechafin:any) {
        this.nombre = nombre;
        this.fechainicio=fechainicio;
        this.fechafin=fechafin;



    }

}