using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;
using Microsoft.Extensions.Configuration;


namespace SW_2.Controllers
{
    [Route("api/[controller]")]

    public class MateriaController : Controller
    {


        public class JoinMateriaCarrera{
            public int Idmateria;
            public string NombreM;

            public string Codigo;

            public int Carrera;
            public string EstadoM;

            public int Idcarrera;

            public string NombreC;

            public string EstadoC;




        }





         private IConfiguration configuration;
        private baseswContext context;
        public MateriaController(IConfiguration configuration)
        {
            this.configuration = configuration;
            this.context = new baseswContext(this.configuration);
        }

        [HttpGet]
        [Route("ListaMaterias")]
        public List<Materia> Lista()
        {
            return this.context.Materia.ToList();
        }



        [HttpGet]
        [Route("ListaMateriasCarrera")]
        public List<JoinMateriaCarrera> ListaMateriaPorCarrera()
        {
            var query = from Materia in context.Materia
                        join
            Carrera in context.Carrera on Materia.Carrera equals Carrera.Idcarrera
                        select new JoinMateriaCarrera
                        {
                            Idmateria=Materia.Idmateria,
                            NombreM=Materia.Nombre,
                            Codigo=Materia.Codigo,
                            Carrera=(int)Materia.Carrera,
                            EstadoM=Materia.Estado,
                            Idcarrera=Carrera.Idcarrera,
                            NombreC=Carrera.Nombre,
                            EstadoC=Carrera.Estado

                            
                        };
            return query.ToList();

        }
            
            


         [HttpGet]
        [Route("ListaMateriasActivas")]
        public List<Materia> ListaMateriasActivas()
        {
            String estado="ACTIVO";
            return this.context.Materia.Where(x=>x.Estado==estado).ToList();
        }

        [HttpGet]
        [Route("ListaCarreras")]
        public List<Carrera> ListaCarreras()
        {
            return this.context.Carrera.ToList();
        }


        [HttpGet]
        [Route("Get/{id}")]
        public Materia Materia(int id)
        {
            Materia comunidad = (from item in context.Materia
                                 where item.Idmateria == id
                                 select item).FirstOrDefault<Materia>();
            return comunidad;
        }


        [HttpPost]
        [Route("Addmat")]
        public List<Materia> Lista([FromBody]Materia temp)
        {
            List<Materia> listaaux = Lista();

            bool existe = listaaux.Any(item => item.Codigo == temp.Codigo);

            if (!existe)
            {
                Materia materia = new Materia
                {
                    Nombre = temp.Nombre,
                    Codigo = temp.Codigo,
                    Carrera = temp.Carrera,
                    Estado = temp.Estado

                };
                context.Materia.Add(materia);
                context.SaveChanges();
                return this.context.Materia.ToList();
            }

            return null;

        }


        [HttpPut]
        [Route("Edit")]
        public List<Materia> EditMateria([FromBody] Materia temp)
        {
            /*  List<Materia> listaaux = Lista();

             bool existe = listaaux.Any(item => item.Codigo == temp.Codigo);

             if (!existe)
             {*/
            Materia materia = new Materia
            {
                Idmateria = temp.Idmateria,
                Nombre = temp.Nombre,
                Codigo = temp.Codigo,
                Carrera = temp.Carrera,
                Estado = temp.Estado

            };
            context.Update<Materia>(materia);
            context.SaveChanges();
            return context.Materia.ToList();
            //}
            //  return null;

        }

        [HttpDelete]
        [Route("Eliminar/{idmateria}")]
        public List<Materia> Eliminar(int idmateria)
        {
            Materia materia = new Materia
            {
                Idmateria = idmateria
            };

            context.Remove(materia);
            context.SaveChanges();
            return context.Materia.ToList();
        }


        [HttpPut]
        [Route("EditarEstado")]
        public List<Materia> CambiarEstadoMateria([FromBody] Materia temp)
        {

            Materia materia = new Materia
            {
                Idmateria = temp.Idmateria,
                Estado = temp.Estado

            };
            context.Update<Materia>(materia);
            context.SaveChanges();
            return context.Materia.ToList();
            //}
            //  return null;

        }



    }

}
