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
   
    public class TipoPersonaController : Controller
    {
        private IConfiguration configuration;
        private baseswContext context;
        public TipoPersonaController(IConfiguration configuration)
        {
            this.configuration = configuration;
            this.context = new baseswContext(this.configuration);
        }

        [HttpGet]
        [Route("Lista")] 
        public List<Tipopersona> Lista(){
            return this.context.Tipopersona.ToList();
        }
    }
        
}
