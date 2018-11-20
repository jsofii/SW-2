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
        public ActionResult Index(){
            return View();
        }
        [HttpGet]
        public ActionResult EnviarCorre(){
            return View();
        }
        [HttpPost]
        [Route("send")] 
        public ActionResult EnviarCorreo(String para, String asunto, String mensaje){

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
                smtp.EnableSsl=true;
                smtp.UseDefaultCredentials=true;
                string sCuentaCorreo="sofig.0106@gmail.com";
                string sPasswordCorreo="5109899555678";
                smtp.Credentials=new System.Net.NetworkCredential(sCuentaCorreo,sPasswordCorreo);
                smtp.Send(correo);
                ViewBag.mensaje="mensaje enviador";

            }catch(Exception ex){

            }
            return View();

        }
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
