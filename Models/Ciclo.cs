using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Ciclo
    {
        public Ciclo()
        {
            Horario = new HashSet<Horario>();
        }

        public int Idciclo { get; set; }
        public string Nombre { get; set; }
        public DateTime Fechainicio { get; set; }
        public DateTime Fechafin { get; set; }
        public string Estado { get; set; }

        public ICollection<Horario> Horario { get; set; }
    }
}
