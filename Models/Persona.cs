using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Persona
    {
        public Persona()
        {
            Listanegra = new HashSet<Listanegra>();
            Prestamoequipo = new HashSet<Prestamoequipo>();
            Prestamolaboratorio = new HashSet<Prestamolaboratorio>();
            Usuario = new HashSet<Usuario>();
        }

        public int Idpersona { get; set; }
        public string Nombrecompleto { get; set; }
        public string Identificacionpersonal { get; set; }
        public int Tipopersona { get; set; }

        public Tipopersona IdpersonaNavigation { get; set; }
        public ICollection<Listanegra> Listanegra { get; set; }
        public ICollection<Prestamoequipo> Prestamoequipo { get; set; }
        public ICollection<Prestamolaboratorio> Prestamolaboratorio { get; set; }
        public ICollection<Usuario> Usuario { get; set; }
    }
}
