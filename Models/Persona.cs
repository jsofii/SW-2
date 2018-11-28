using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Persona
    {
        public Persona()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int Idpersona { get; set; }
        public string Nombrecompleto { get; set; }
        public string Identificacionpersonal { get; set; }
        public int Idtipopersona { get; set; }

        public Tipopersona IdtipopersonaNavigation { get; set; }
        public ICollection<Usuario> Usuario { get; set; }
    }
}
