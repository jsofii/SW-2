using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;
using System.Net.Mail;
using System.Web;




namespace SW_2.Controllers
{
    [Route("api/[controller]")]

    public class PersonaController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult EnviarCorre()
        {
            return View();
        }
        [HttpPost]
        [Route("send")]
        public ActionResult EnviarCorreo(String para, String asunto, String mensaje)
        {
            string x = "";
            try
            {
                MailMessage correo = new MailMessage();
                correo.From = new MailAddress("sofig.0106@hotmail.com");
                correo.To.Add(para);
                correo.Subject = asunto;
                correo.Body = mensaje;
                correo.IsBodyHtml = true;
                correo.Priority = MailPriority.Normal;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 25;
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = true;
                string sCuentaCorreo = "sofig.0106@gmail.com";
                string sPasswordCorreo = "5109899555678";
                smtp.Credentials = new System.Net.NetworkCredential(sCuentaCorreo, sPasswordCorreo);
                smtp.Send(correo);
                ViewBag.mensaje = "mensaje enviador";

            }
            catch (Exception ex)
            {

            }
            return View();
        }


        baseswContext context = new baseswContext();


        [HttpPost]
        [Route("Add")]
        public List<Persona> Lista([FromBody]Persona temp)
        {
            List<JoinPersona> listaaux = Lista();

            bool existe = listaaux.Any(item => item.Correo == temp.Correo);
            if (!existe)
            {
                Persona persona = new Persona
                {
                    Nombrecompleto = temp.Nombrecompleto,
                    Identificacionpersonal = temp.Identificacionpersonal,
                    Idtipopersona = temp.Idtipopersona,
                    Correo = temp.Correo

                };
                context.Persona.Add(persona);
                context.SaveChanges();
                return this.context.Persona.ToList();
            }

            return null;
        }
        [HttpGet]
        [Route("existeUsuario/{correo}")]
        public Boolean existeUsuario(string correo)
        {
            Persona pers = this.context.Persona.Where(x => x.Correo == correo).FirstOrDefault();
            if (pers != null)
            {
                Usuario usr = this.context.Usuario.Where(x => x.Idpersona == pers.Idpersona).FirstOrDefault();
                if (usr != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }



        }
        [HttpPost]
        [Route("temporalPass")]
        public Boolean temporalPass([FromBody]Persona correo)
        {

            Persona pers = this.context.Persona.Where(x => x.Correo == correo.Correo).FirstOrDefault();
            if (pers != null)
            {
                Usuario usr = this.context.Usuario.Where(x => x.Idpersona == pers.Idpersona).FirstOrDefault();
                Random r = new Random(DateTime.Now.Millisecond);
                int pass = r.Next(10000, 200000);

                if (usr != null)
                {

                    usr.Password = BCrypt.Net.BCrypt.HashPassword(pass.ToString());
                    EnviarCorreo(pers.Correo, "Cambio de contraseña", pass.ToString());
                    this.context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }



        }

        public class JoinPersona
        {
            public int Idpersona { get; set; }
            public string Nombrecompleto { get; set; }
            public string Identificacionpersonal { get; set; }
            public string Correo { get; set; }
            public int Idtipopersona { get; set; }
            public string Nombre { get; set; }
        }


        [HttpGet]
        [Route("InfoPersonas")]
        public List<JoinPersona> Lista()
        {
            var query = from persona in context.Persona
                        join
            tipoPersona in context.Tipopersona on persona.Idtipopersona equals tipoPersona.Idtipopersona
                        select new JoinPersona
                        {
                            Idpersona = persona.Idpersona,
                            Nombrecompleto = persona.Nombrecompleto,
                            Identificacionpersonal = persona.Identificacionpersonal,
                            Correo = persona.Correo,
                            Idtipopersona = persona.Idtipopersona,
                            Nombre = tipoPersona.Nombre
                        };

            List<JoinPersona> lista = query.ToList();
            return lista;
        }

    }




}
