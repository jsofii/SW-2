using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Carrera
    {
        public Carrera()
        {
            Materia = new HashSet<Materia>();
        }

        public int Idcarrera { get; set; }
        public string Nombre { get; set; }

        public ICollection<Materia> Materia { get; set; }
    }
}
