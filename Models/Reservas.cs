using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Reservas
    {
        public int Id { get; set; }
        public int? Anio { get; set; }
        public int? Mes { get; set; }
        public int? Dia { get; set; }
        public int? Hora { get; set; }
        public int? Minutos { get; set; }
        public int? Aniofin { get; set; }
        public int? Mesfin { get; set; }
        public int? Diafin { get; set; }
        public int? Horafin { get; set; }
        public int? Minutosfin { get; set; }
        public string Subject { get; set; }
        public string Tipo { get; set; }
        public int? Idlaboratorio { get; set; }
        public string Until { get; set; }
    }
}
