using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Tipopersona
    {
        public Tipopersona()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int Idtipopersona { get; set; }
        public string Nombre { get; set; }

        public Persona Persona { get; set; }
        public ICollection<Usuario> Usuario { get; set; }
    }
}
