using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]

    public class LaboratorioController : Controller
    {
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaLaboratorios")]
        public List<Laboratorio> Lista()
        {
            return this.context.Laboratorio.ToList();
        }

        [HttpGet]
        [Route("Get/{id}")]
        public Laboratorio Laboratorio(int id)
        {
            Laboratorio laboratorio = (from item in context.Laboratorio
                                       where item.Idlaboratorio == id
                                       select item).FirstOrDefault<Laboratorio>();
            return laboratorio;
        }


        [HttpPost]
        [Route("Addlab")]
        public List<Laboratorio> Lista([FromBody]Laboratorio temp)
        {
            
            Laboratorio laboratorio = new Laboratorio
            {
                Numero = temp.Numero,
                Nombre = temp.Nombre

            };
            context.Laboratorio.Add(laboratorio);
            context.SaveChanges();
            return this.context.Laboratorio.ToList();
        }
        [HttpPut]
        [Route("Edit")]
        public List<Laboratorio> Editlaboratorio([FromBody] Laboratorio temp)
        {
            Laboratorio laboratorio = new Laboratorio
            {
                Idlaboratorio = temp.Idlaboratorio,
                Numero = temp.Numero,
                Nombre = temp.Nombre


            };
            context.Update<Laboratorio>(laboratorio);
            context.SaveChanges();
            return context.Laboratorio.ToList();
        }

        [HttpDelete]
        [Route("Eliminar/{idlaboratorio}")]
        public List<Laboratorio> Eliminar(int idlaboratorio)
        {
            Laboratorio laboratorio = new Laboratorio
            {
                Idlaboratorio = idlaboratorio
            };

            context.Remove(laboratorio);
            context.SaveChanges();
            return context.Laboratorio.ToList();
        }


    }

}
