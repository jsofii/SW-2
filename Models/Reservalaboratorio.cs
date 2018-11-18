using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Reservalaboratorio
    {
        public int Idreservalaboratorio { get; set; }
        public int Idlaboratorio { get; set; }
        public int Idusuario { get; set; }
        public string Motivoreserva { get; set; }
        public string Horadeinicio { get; set; }
        public string Horadefin { get; set; }
        public DateTime Fecha { get; set; }
        public string Estadoreserva { get; set; }

        public Laboratorio IdlaboratorioNavigation { get; set; }
        public Usuario IdusuarioNavigation { get; set; }
    }
}
