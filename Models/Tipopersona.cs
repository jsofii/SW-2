using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Tipopersona
    {
        public Tipopersona()
        {
            Persona = new HashSet<Persona>();
        }

        public int Idtipopersona { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Persona> Persona { get; set; }
    }
}
