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


        [HttpPost]
        [Route("Editar")]
        public List<Usuario> Editar([FromBody] Usuario temp)
        {
            Usuario usr = this.context.Usuario.Find(temp.Idusuario);
            usr.Nombreusuario = temp.Nombreusuario;
            usr.Password = temp.Password;
            usr.Estado = temp.Estado;
            this.context.SaveChanges();

            return this.context.Usuario.ToList();
        }
        [HttpGet]
        [Route("UsuarioEditar/{idUsuario}")]
        public Usuario UsuarioEditar(int idusuario)
        {
            return this.context.Usuario.Find(idusuario);
        }

        [HttpGet]
        [Route("ListaUsuario")]
        public List<Usuario> ListaUsuarios()
        {

            return this.context.Usuario.ToList();
        }
        [HttpDelete]
        [Route("DeleteUsuario/{idusuario}")]
        public List<Usuario> DeleteUsuario(int idusuario)
        {
            Usuario user = this.context.Usuario.Find(idusuario);
            this.context.Remove(user);
            this.context.SaveChanges();
            return this.context.Usuario.ToList();
        }
        [HttpGet]
        [Route("AddUsuario/{idpersona}/{nombreUsuario}/{contrasenia}/{estado}")]
        public string AddUsuario(int idpersona, string nombreUsuario, string contrasenia, string estado)
        {
            try
            {
                Usuario s = new Usuario
                {
                    Idpersona = idpersona,
                    Nombreusuario = nombreUsuario,
                    Password = contrasenia,
                    Estado = estado
                };
                this.context.Usuario.Add(s);
                this.context.SaveChanges();
                return "yes";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
        [HttpGet]
        [Route("verificarUsuario/{usuario}/{contrasenna}")]
        public bool VerificarUsuario(string usuario, string contrasenna)
        {
             Usuario user = (from item in context.Usuario
                            where item.Nombreusuario == usuario
                            select item).FirstOrDefault<Usuario>();
            if (BCrypt.Net.BCrypt.Verify(contrasenna, user.Password)){
                return true;
            }else{
                return false;
            }
          
          
        }
        

       
        [HttpPost]
        [Route("addUsuario")]
        public string AddUsuario([FromBody] Usuario temp)
        {
            string password=  BCrypt.Net.BCrypt.HashPassword(temp.Password);
            Usuario user = new Usuario
            {
                Idpersona = temp.Idpersona,
                Nombreusuario = temp.Nombreusuario,
                Password = password,
                Estado = temp.Estado
            };


            
                this.context.Usuario.Add(user);
                this.context.SaveChanges();
                return "TRUE";
            
           

        }
    }

}
