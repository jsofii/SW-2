import { Pipe, PipeTransform } from '@angular/core';
import { PersonaAux } from './pipe.data';
import { UsuarioComponent } from './usuario/usuario.component';
@Pipe({
  name: 'filterpipe'
})

export class FilterpipePipe implements PipeTransform {

  bandera: any;
  usuarioC: UsuarioComponent;
  constructor(usuarioC: UsuarioComponent) {
    this.usuarioC = usuarioC;
    this.bandera = this.usuarioC.parametroBusqueda;
  }

  actualizarParametro() {
    this.bandera = this.usuarioC.parametroBusqueda;
    //console.log(this.bandera);
  }

  transform(items: PersonaAux[], searchText: string): any[] {
    this.actualizarParametro();

    if (!items) return [];
    if (!searchText) return items;

    if (this.bandera == 0 || this.bandera == 2 || this.bandera == 3) {
      searchText = searchText.toLowerCase();
    }

    if (this.bandera == 0) {
      return items.filter(it => {
        return it.nombrecompleto.toLowerCase().includes(searchText);
      });
    /*} else if (this.bandera == 1) {
      return items.filter(it => {
        return it.identificacionpersonal.toString().includes(searchText);
      });*/
    } else if (this.bandera == 2) {
      return items.filter(it => {
        return it.nombre.toLowerCase().includes(searchText);
      });
    } else if (this.bandera == 3) {
      return items.filter(it => {
        return it.correo.toLowerCase().includes(searchText);
      });
    }


  }

}
