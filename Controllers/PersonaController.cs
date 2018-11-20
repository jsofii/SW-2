using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]
   
    public class PersonaController : Controller
    {
        baseswContext context=new baseswContext();
        [HttpPost]
        [Route("Add")] 
        public List<Persona> Lista([FromBody]Persona temp){
            Persona persona= new Persona{
                Nombrecompleto=temp.Nombrecompleto,
                Identificacionpersonal=temp.Identificacionpersonal,
                Idtipopersona=temp.Idtipopersona
            };
            context.Persona.Add(persona);
            context.SaveChanges();
            return this.context.Persona.ToList();
        }
    }
        
}
