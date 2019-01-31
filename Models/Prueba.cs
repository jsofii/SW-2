using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Prueba
    {
        public int Id { get; set; }
        public int? Anio { get; set; }
        public int? Mes { get; set; }
        public int? Dia { get; set; }
        public int? Hora { get; set; }
        public int? Minutos { get; set; }
        public string Subject { get; set; }
    }
}
