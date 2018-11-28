using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Tipopersona
    {
        public int Idtipopersona { get; set; }
        public string Nombre { get; set; }

        public Persona Persona { get; set; }
    }
}
