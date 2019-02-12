import { Pipe, PipeTransform } from '@angular/core';
import { LaboratorioAux2 } from '../pipe.data'
import { LaboratorioComponent } from './laboratorio.component'

@Pipe({
  name: 'filtrolabo'
})
export class FiltrolaboPipe implements PipeTransform {
  bandera: any;
  laboC: LaboratorioComponent;
  constructor(laboC: LaboratorioComponent) {
    this.laboC = laboC;
    this.bandera = this.laboC.parametroBusqueda;
  }


  actualizarParametro() {
    this.bandera = this.laboC.parametroBusqueda;
    //console.log(this.bandera);
  }



  transform(items: LaboratorioAux2[], searchText: string): any[] {
    this.actualizarParametro();
    if (!items) return [];
    if (!searchText) return items;

    if(this.bandera == 0){
      searchText = searchText.toLowerCase();
    }
    

    if (this.bandera == 0) {
      return items.filter(it => {
        return it.nombre.toLowerCase().includes(searchText);
      });
    } else if (this.bandera == 1) {
      return items.filter(it => {
        return it.numero.toString().includes(searchText);
      });
    }


  }

}



