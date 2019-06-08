using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Reservalaboratorio
    {
        public int Idreservalaboratorio { get; set; }
        public int Idlaboratorio { get; set; }
        public string Motivoreserva { get; set; }
        public int Horadeinicio { get; set; }
        public int Horadefin { get; set; }
        public DateTime Fecha { get; set; }
        public string Estadoreserva { get; set; }
        public int Idpersona { get; set; }

        public virtual Laboratorio IdlaboratorioNavigation { get; set; }
        public virtual Persona IdpersonaNavigation { get; set; }
    }
}
