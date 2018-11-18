using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Listanegra
    {
        public int Idlistanegra { get; set; }
        public int Idpersona { get; set; }
        public int Idprestamoequipo { get; set; }
        public DateTime Fecharegistro { get; set; }

        public Persona IdpersonaNavigation { get; set; }
        public Prestamoequipo IdprestamoequipoNavigation { get; set; }
    }
}
