import { Pipe, PipeTransform } from '@angular/core';
import {MateriaAux} from '../pipe.data'

@Pipe({
  name: 'pipemateria'
})
export class PipemateriaPipe implements PipeTransform {

  transform(items: MateriaAux[], searchText: string): any[] {
    if (!items) return [];
  if (!searchText) return items;
  searchText = searchText.toLowerCase();
  return items.filter(it => {
    return it.nombre.toLowerCase().includes(searchText);
  });
  }

}
