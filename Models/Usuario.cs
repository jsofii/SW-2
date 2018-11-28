using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Reservalaboratorio = new HashSet<Reservalaboratorio>();
        }

        public int Idusuario { get; set; }
        public int Idpersona { get; set; }
        public string Nombreusuario { get; set; }
        public string Correo { get; set; }
        public string Password { get; set; }
        public string Estado { get; set; }

        public Persona IdpersonaNavigation { get; set; }
        public ICollection<Reservalaboratorio> Reservalaboratorio { get; set; }
    }
}
