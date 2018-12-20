import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class cicloServiceService {


  constructor(private http: HttpClient) {
    this.host = "https://localhost:5001";
  }

  host: string;


  ListaTodosCiclos() {
    return this.http.get('https://localhost:5001/api/Ciclo/ListaCiclos');

  }
  GetCicloId(id:number)
  {
    return this.http.get('https://localhost:5001/api/Ciclo/Get/'+ id);
  }
  EditCiclo(idciclo: any,nombreCiclo: any, fechainicio: any,fechaifin: any){
    var temp = {
      Idciclo: idciclo,
      Nombre: nombreCiclo,
      Fechainicio: fechainicio,
      Fechafin: fechaifin
      
    }

    
    return this.http.put('https://localhost:5001/api/Ciclo/Edit/', temp);

  }
  
  AddCiclo(nombreCiclo: any, fechainicio: any,fechaifin: any) {
    var temp = {
      Nombre: nombreCiclo,
      Fechainicio: fechainicio,
      Fechafin: fechaifin
    }

    
    return this.http.post('https://localhost:5001/api/Ciclo/Addciclo/', temp);

  }

  DeleteCiclo(idciclo: number){
    return this.http.delete('https://localhost:5001/api/Ciclo/Eliminar/' + idciclo);
  
  }

  


  
}
