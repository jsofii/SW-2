using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]
   
    public class TipoPersonaController : Controller
    {
        baseswContext context=new baseswContext();
        [HttpGet]
        [Route("Lista")] 
        public List<Tipopersona> Lista(){
            return this.context.Tipopersona.ToList();
        }
    }
        
}
