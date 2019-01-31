using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
     public class prueba
        {
            public int Id{ get; set; }
           
        }

    [Route("api/[controller]")]

    public class HorarioController : Controller
    {
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaHorarioMateria")]
        public List<Horario> Lista()
        {
            return this.context.Horario.Where(s=>s.Idmateria==27).ToList();
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
        [HttpGet]
        [Route("reservas")]
        public List<Reservas> reservas(int id)
        {
          
            return this.context.Reservas.ToList();
        }


      
}
}
