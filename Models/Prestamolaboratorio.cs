using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Prestamolaboratorio
    {
        public int Idprestamolaboratorio { get; set; }
        public int Idencargado { get; set; }
        public int Idlaboratorio { get; set; }
        public int Idpersona { get; set; }
        public string Horadeentrada { get; set; }
        public string Horadesalida { get; set; }
        public DateTime Fecha { get; set; }

        public Usuario IdencargadoNavigation { get; set; }
        public Laboratorio IdlaboratorioNavigation { get; set; }
        public Persona IdpersonaNavigation { get; set; }
    }
}
