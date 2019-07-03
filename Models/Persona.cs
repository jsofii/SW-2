using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Persona
    {
        public Persona()
        {
            Reservalaboratorio = new HashSet<Reservalaboratorio>();
            Reservas = new HashSet<Reservas>();
            Usuario = new HashSet<Usuario>();
        }

        public int Idpersona { get; set; }
        public string Nombrecompleto { get; set; }
        public string Identificacionpersonal { get; set; }
        public int Idtipopersona { get; set; }
        public string Correo { get; set; }
        public string Estado { get; set; }

        public Tipopersona IdtipopersonaNavigation { get; set; }
        public ICollection<Reservalaboratorio> Reservalaboratorio { get; set; }
        public ICollection<Reservas> Reservas { get; set; }
        public ICollection<Usuario> Usuario { get; set; }
    }
}
