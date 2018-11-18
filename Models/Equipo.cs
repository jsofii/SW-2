using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Equipo
    {
        public Equipo()
        {
            Prestamoequipo = new HashSet<Prestamoequipo>();
        }

        public int Idequipo { get; set; }
        public string Tipo { get; set; }
        public string Marca { get; set; }
        public string Codigo { get; set; }
        public string Estado { get; set; }

        public ICollection<Prestamoequipo> Prestamoequipo { get; set; }
    }
}
