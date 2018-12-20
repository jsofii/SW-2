import { Pipe, PipeTransform } from '@angular/core';
import {PersonaAux} from './pipe.data'
@Pipe({
  name: 'filterpipe'
})

export class FilterpipePipe implements PipeTransform {
  

  transform(items: PersonaAux[], searchText: string): any[] {
    
    
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.nombrecompleto.toLowerCase().includes(searchText);
    });
  }
 

}
