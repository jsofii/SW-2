using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;

namespace SW_2.Controllers
{
    [Route("api/[controller]")]

    public class UsuarioController : Controller

    {
        public class UsuarioJoin
        {

        }
        baseswContext context = new baseswContext();
        [HttpGet]
        [Route("ListaTodo")]
        public List<Persona> Lista()
        {
            return this.context.Persona.ToList();
        }
        [HttpGet]
        [Route("verificarUsuario/{usuario}/{contrasenna}")]
        public bool VerificarUsuario(string usuario, string contrasenna)
        {
            Usuario user = (from item in context.Usuario
                            where item.Nombreusuario == usuario
                            select item).FirstOrDefault<Usuario>();
            if (user.Password == contrasenna)
                return true;
            else
                return false;
        }
    }

}
