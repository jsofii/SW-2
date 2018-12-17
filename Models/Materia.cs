using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Materia
    {
        public int Idmateria { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public int? Carrera { get; set; }

        public Carrera CarreraNavigation { get; set; }
    }
}
