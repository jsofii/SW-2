import { Pipe, PipeTransform } from '@angular/core';
import { UsuarioAux } from '../pipe.data';
import {UsuarioComponent} from './usuario.component';

@Pipe({
  name: 'filtrousuario'
})
export class FiltrousuarioPipe implements PipeTransform {
  

  transform(items: UsuarioAux[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.nombreusuario.toLowerCase().includes(searchText);
    });
  }

}


