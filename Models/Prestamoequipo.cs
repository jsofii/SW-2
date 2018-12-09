using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Prestamoequipo
    {
        public Prestamoequipo()
        {
            Listanegra = new HashSet<Listanegra>();
        }

        public int Idprestamoequipo { get; set; }
        public int Idencargado { get; set; }
        public int Idequipo { get; set; }
        public int Idpersona { get; set; }
        public DateTime Fechaprestamo { get; set; }
        public DateTime Fechadevolucion { get; set; }
        public string Estadodevolucion { get; set; }
        public string Estadoequipo { get; set; }

        public Usuario IdencargadoNavigation { get; set; }
        public Equipo IdequipoNavigation { get; set; }
        public Persona IdpersonaNavigation { get; set; }
        public ICollection<Listanegra> Listanegra { get; set; }
    }
}
