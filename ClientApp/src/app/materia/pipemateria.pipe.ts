import { Pipe, PipeTransform } from '@angular/core';
import { MateriaAux } from '../pipe.data';
import { MateriaComponent } from './materia.component'

@Pipe({
  name: 'pipemateria'
})
export class PipemateriaPipe implements PipeTransform {
  bandera: any;
  materiaC: MateriaComponent;

  constructor(materiaC: MateriaComponent) {
    this.materiaC = materiaC;
    this.bandera = this.materiaC.parametroBusqueda;
  }


  actualizarParametro() {
    this.bandera = this.materiaC.parametroBusqueda;
  }

  transform(items: MateriaAux[], searchText: string): any[] {

    this.actualizarParametro();

    if (!items) return [];
    if (!searchText) return items;


    searchText = searchText.toLowerCase();

    if (this.bandera == 0) {
      return items.filter(it => {
        return it.nombre.toLowerCase().includes(searchText);
      });
    } else {
      return items.filter(it => {
        return it.codigo.toLowerCase().includes(searchText);
      });
    }

  }

}
