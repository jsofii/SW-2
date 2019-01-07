using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Semana
    {
        public int Idsemana { get; set; }
        public string Dia { get; set; }
        public int? Numdia { get; set; }
        public int? Horainicio { get; set; }
        public int? Horafin { get; set; }
        public string Horastring { get; set; }
    }
}
