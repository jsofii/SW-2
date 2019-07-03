using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SW_2.Models;
using System.Net.Mail;
using System.Web;
using Microsoft.Extensions.Configuration;




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
        /* [HttpPost]
        [Route("send")]
        public ActionResult EnviarCorreo(String para, String asunto, String mensaje)
        {
            string x="";
          try{
                MailMessage correo= new MailMessage();
                correo.From=new MailAddress("sofig.0106@hotmail.com");
                correo.To.Add(para);
                correo.Subject=asunto;
                correo.Body=mensaje;
                correo.IsBodyHtml=true;
                correo.Priority=MailPriority.Normal;
                SmtpClient smtp= new SmtpClient();
                smtp.Host="smtp.gmail.com";
                smtp.Port=25;
                smtp.EnableSsl=false;
                smtp.UseDefaultCredentials=true;
                string sCuentaCorreo="sofig.0106@gmail.com";
                string sPasswordCorreo="5109899555678";
                smtp.Credentials=new System.Net.NetworkCredential(sCuentaCorreo,sPasswordCorreo);
                smtp.Send(correo);
                ViewBag.mensaje="mensaje enviador";

            }catch(Exception ex){
                Console.WriteLine(ex);
            }
            return View();
        }*/


        [HttpPost]
        [Route("send")]
        public void EnviarCorreo(String correoDestinatario, String asunto, String cuerpoMensaje)
        {
            System.Net.Mail.MailMessage msg = new System.Net.Mail.MailMessage();
            //a quien va dirigido

            msg.To.Add(correoDestinatario);

            msg.Subject = asunto;
            msg.SubjectEncoding = System.Text.Encoding.UTF8;

            //una copia a alguien adicional que deba recibir el correo
            //msg.Bcc.Add("aqui el correo");

            msg.Body = cuerpoMensaje;
            msg.BodyEncoding = System.Text.Encoding.UTF8;
            msg.IsBodyHtml = true;

            //quien está enviando el correo
            //msg.From = new System.Net.Mail.MailAddress("transporteepn@gmail.com");
            msg.From = new System.Net.Mail.MailAddress("sofig.0106@gmail.com");

            System.Net.Mail.SmtpClient cliente = new System.Net.Mail.SmtpClient();

            //las credenciales de quien envia y se coloca el password

            //cliente.Credentials = new System.Net.NetworkCredential("transporteepn@gmail.com", "EPN123456");
            cliente.Credentials = new System.Net.NetworkCredential("sofig.0106@gmail.com", "5109899555678");
            //a gmail

            cliente.Port = 587;
            cliente.EnableSsl = true;
            cliente.Host = "smtp.gmail.com"; //mail.dominio.com
            try
            {
                cliente.Send(msg);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                //Console.ReadKey();
            }
        }


         private IConfiguration configuration;
        private baseswContext context;
        public PersonaController(IConfiguration configuration)
        {
            this.configuration = configuration;
            this.context = new baseswContext(this.configuration);
        }


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


        [HttpPut]
        [Route("Editpersona")]
        public List<Persona> EditPersona([FromBody] Persona temp)
        {

            Persona persona = new Persona
            {
                Idpersona = temp.Idpersona,
                Nombrecompleto = temp.Nombrecompleto,
                Identificacionpersonal = temp.Identificacionpersonal,
                Idtipopersona = temp.Idtipopersona,
                Correo = temp.Correo

            };
            context.Update<Persona>(persona);
            context.SaveChanges();
            return this.context.Persona.ToList();


        }


        [HttpGet]
        [Route("Get/{id}")]
        public Persona PersonaporId(int id)
        {
            Persona persona = (from item in context.Persona
                               where item.Idpersona == id
                               select item).FirstOrDefault<Persona>();
            return persona;
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

        [HttpGet]
        [Route("ListaProfesores")]
        public List<JoinPersona> ListaProfesores()
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

            List<JoinPersona> lista = query.Where(x=> x.Idtipopersona==2).ToList();
            return lista;
        }

    }




}
