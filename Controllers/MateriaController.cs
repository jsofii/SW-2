using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]
   
    public class MateriaController : Controller
    {
        baseswContext context=new baseswContext();
        [HttpGet]
        [Route("ListaMaterias")] 
        public List<Materia> Lista(){
            return this.context.Materia.ToList();
        }


        [HttpPost]
        [Route("Addmat")] 
        public List<Materia> Lista([FromBody]Materia temp){
            Materia materia= new Materia{
                Nombre=temp.Nombre,
                Codigo=temp.Codigo
                
            };
            context.Materia.Add(materia);
            context.SaveChanges();
            return this.context.Materia.ToList();
        }

        [HttpDelete]
        [Route("Eliminar/{idmateria}")]
        public List<Materia> Eliminar(int idmateria)
        {
            Materia materia= new Materia
            {
               Idmateria=idmateria
            };
            
            context.Remove(materia);
            context.SaveChanges();
            return context.Materia.ToList();
        }


    }
        
}
