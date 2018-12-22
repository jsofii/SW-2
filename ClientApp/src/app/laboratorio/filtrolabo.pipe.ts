import { Pipe, PipeTransform } from '@angular/core';
import {LaboratorioAux} from '../pipe.data'

@Pipe({
  name: 'filtrolabo'
})
export class FiltrolaboPipe implements PipeTransform {

  transform(items: LaboratorioAux[], searchText: string): any[] {
    if (!items) return [];
  if (!searchText) return items;
  searchText = searchText.toLowerCase();
  return items.filter(it => {
    return it.nombre.toLowerCase().includes(searchText);
  });
  }

}



