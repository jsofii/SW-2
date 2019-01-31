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
        public int Id { get; set; }

    }

    [Route("api/[controller]")]

    public class HorarioController : Controller
    {
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaHorarioMateria/{idlaboratorio}/{idciclo}")]
        public List<Horario> Lista(int idlaboratorio, int idciclo,int idmateria)
        {
            return this.context.Horario.Where(s => s.Idciclo == idciclo).Where(x => x.Idlaboratorio == idlaboratorio).ToList();
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
        [HttpPost]
        [Route("addReserva")]
        public List<Reservas> addReserva([FromBody]Reservas reserva)
        {
            this.context.Add(reserva);
            this.context.SaveChanges();
            return this.context.Reservas.ToList();

        }



        /*`IDHORARIO` int(11) NOT NULL AUTO_INCREMENT,
          `IDLABORATORIO` int(11) NOT NULL,
          `IDMATERIA` int(11) NOT NULL,
          `IDCICLO` int(11) NOT NULL,
          `HORADEINICIO` int(11) NOT NULL,
          `HORADEFIN` int(11) NOT NULL,
          `DIA` int(11) NOT NULL, */


        [HttpPost]
        [Route("addHorario")]
        public List<Horario> addHorario([FromBody]Horario temp)
        {

            Horario horario = new Horario
            {
                Idlaboratorio = temp.Idlaboratorio,
                Idmateria = temp.Idmateria,
                Idciclo = temp.Idciclo,
                Horadeinicio = temp.Horadeinicio,
                Horadefin = temp.Horadefin,
                Dia = temp.Dia

            };

            context.Horario.Add(horario);
            context.SaveChanges();
            return this.context.Horario.ToList();
        }

    }
}
