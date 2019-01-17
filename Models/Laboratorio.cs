using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Laboratorio
    {
        public Laboratorio()
        {
            Horario = new HashSet<Horario>();
            Reservalaboratorio = new HashSet<Reservalaboratorio>();
        }

        public int Idlaboratorio { get; set; }
        public int Numero { get; set; }
        public string Nombre { get; set; }
        public string Estado { get; set; }

        public ICollection<Horario> Horario { get; set; }
        public ICollection<Reservalaboratorio> Reservalaboratorio { get; set; }
    }
}
