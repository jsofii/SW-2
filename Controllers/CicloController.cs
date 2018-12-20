using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]

    public class CicloController : Controller
    {
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaCiclos")]
        public List<Ciclo> Lista()
        {
            return this.context.Ciclo.ToList();
        }
        [HttpGet]
        [Route("Get/{id}")]
        public Ciclo Ciclo(int id)
        {
            Ciclo comunidad = (from item in context.Ciclo
                                 where item.Idciclo == id
                                 select item).FirstOrDefault<Ciclo>();
            return comunidad;
        }


        [HttpPost]
        [Route("Addciclo")]
        public List<Ciclo> Lista([FromBody]Ciclo temp)
        {
            Ciclo ciclo = new Ciclo
            {
                Nombre = temp.Nombre,
                Fechainicio = temp.Fechainicio,
                Fechafin= temp.Fechafin

            };
            context.Ciclo.Add(ciclo);
            context.SaveChanges();
            return this.context.Ciclo.ToList();
        }
        [HttpPut]
        [Route("Edit")]
        public List<Ciclo> EditLider([FromBody] Ciclo temp)
        {
           Ciclo ciclo = new Ciclo
            {
               Idciclo=temp.Idciclo,
               Nombre=temp.Nombre,              
               Fechainicio = temp.Fechainicio,
               Fechafin= temp.Fechafin

            };
            context.Update<Ciclo>(ciclo);
            context.SaveChanges();
            return context.Ciclo.ToList();
        }

        [HttpDelete]
        [Route("Eliminar/{idciclo}")]
        public List<Ciclo> Eliminar(int idciclo)
        {
            Ciclo ciclo = new Ciclo
            {
                Idciclo = idciclo
            };

            context.Remove(ciclo);
            context.SaveChanges();
            return context.Ciclo.ToList();
        }


    }

}
