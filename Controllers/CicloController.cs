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
        [Route("ListaCiclosActivos")]
        public List<Ciclo> ListaCiclosActivos()
        {
            String estado="ACTIVO";
            return this.context.Ciclo.Where(x=>x.Estado==estado).ToList();
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
            List<Ciclo> listaaux = Lista();

            bool existe = listaaux.Any(item => item.Nombre == temp.Nombre);

            if (!existe)
            {

                DateTime fechaAux = temp.Fechafin;
                Ciclo ciclo = new Ciclo
                {
                    Nombre = temp.Nombre,
                    Fechainicio = temp.Fechainicio,
                    Fechafin= new DateTime(fechaAux.Year,fechaAux.Month,fechaAux.Day,23,59,59),
                    Estado=temp.Estado

                };

                context.Ciclo.Add(ciclo);
                context.SaveChanges();
                return this.context.Ciclo.ToList();
            }

            return null;
        }
        [HttpPut]
        [Route("Edit")]
        public List<Ciclo> EditLider([FromBody] Ciclo temp)
        {

            List<Ciclo> listaaux = Lista();
            Ciclo ciclo = this.context.Ciclo.Find(temp.Idciclo);
            ciclo.Nombre=temp.Nombre;
            ciclo.Fechainicio=temp.Fechainicio;
            ciclo.Fechafin=temp.Fechafin;
            ciclo.Estado=temp.Estado;
            context.SaveChanges();
            return this.context.Ciclo.ToList();
            

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
