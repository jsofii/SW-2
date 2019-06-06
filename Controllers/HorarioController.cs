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
        public class JoinHorario
        {
            public int Idhorario { get; set; }
            public int Idlaboratorio { get; set; }
            public int Idmateria { get; set; }
            public int Idciclo { get; set; }
            public int Horadeinicio { get; set; }
            public int Horadefin { get; set; }
            public int Dia { get; set; }
          
            public string Nombre { get; set; }

        }
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaHorarioMateria/{idlaboratorio}/{idciclo}")]
        public List<JoinHorario> Lista(int idlaboratorio, int idciclo, int idmateria)
        {
              var query = from Horario in context.Horario
                        join
            materia in context.Materia on Horario.Idmateria equals materia.Idmateria
                        select new JoinHorario
                        {
                            Idhorario=Horario.Idhorario,
                            Idlaboratorio= Horario.Idlaboratorio,
                            Idmateria= Horario.Idmateria,
                            Idciclo= Horario.Idciclo,
                            Horadeinicio= Horario.Horadeinicio,
                            Horadefin= Horario.Horadefin,
                            Dia= Horario.Dia,
                            Nombre= materia.Nombre
                        };
            return query.Where(s => s.Idciclo == idciclo).Where(x => x.Idlaboratorio == idlaboratorio).ToList();
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
        [Route("reservas/{id}")]
        public List<Reservas> reservas(int id)
        {

            return this.context.Reservas.Where(x=>x.Idlaboratorio==id).ToList();
        }
        [HttpGet]
        [Route("horarios/{id}")]
        public List<Reservas> horarios(int id)
        {

            return this.context.Reservas.Where(x=>(x.Idlaboratorio==id && x.Tipo=="H")).ToList();
        }


        [HttpPost]
        [Route("addReserva")]
        public List<Reservas> addReserva([FromBody]Reservas reserva)
        {
            this.context.Add(reserva);
            this.context.SaveChanges();
            return this.context.Reservas.ToList();

        }
        [HttpDelete]
        [Route("deleteReserva/{idreserva}")]
        public dynamic deleteReserva(int idreserva){
            
            Reservas r=this.context.Reservas.Find(idreserva);
            this.context.Reservas.Remove(r);
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
            DateTime d= new DateTime();
            dynamic s=d.Year;
            Horario horario = new Horario
            {
                Idlaboratorio = temp.Idlaboratorio,
                Idmateria = temp.Idmateria,
                Idciclo = temp.Idciclo,
                Horadeinicio = temp.Horadeinicio,
                Horadefin = temp.Horadefin,
                Dia = temp.Dia

            };
             Materia m=this.context.Materia.Find(temp.Idmateria);
            Reservas r= new Reservas{
            

                Anio= s,
                Aniofin=s,
                Dia= temp.Dia,
                Diafin= temp.Dia,
                Hora= temp.Horadeinicio,
                Horafin=temp.Horadefin,
                Idlaboratorio= temp.Idlaboratorio,
                Mes=d.Month,
                Mesfin= d.Month,
                Minutos=(Int32)0,
                Minutosfin=(Int32)0,
                Subject= m.Nombre,
                Tipo= "H"

                
            };
            context.Reservas.Add(r);

            context.Horario.Add(horario);
            context.SaveChanges();
            return this.context.Horario.ToList();
        }

    }
}
