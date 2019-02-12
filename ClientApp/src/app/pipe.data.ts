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
    nombre: string;
    codigo: string;

    constructor(nombre: any, codigo: any) {
        this.nombre = nombre;

        this.codigo = codigo;

    }

}


export class UsuarioAux {
    nombreusuario: string;

    constructor(nombre: any) {
        this.nombreusuario = nombre;



    }

}