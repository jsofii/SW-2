using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Prestamoequipo = new HashSet<Prestamoequipo>();
            Prestamolaboratorio = new HashSet<Prestamolaboratorio>();
            Reservalaboratorio = new HashSet<Reservalaboratorio>();
        }

        public int Idusuario { get; set; }
        public int Idpersona { get; set; }
        public string Nombreusuario { get; set; }
        public string Password { get; set; }
        public int Idtipopersona { get; set; }

        public Persona IdpersonaNavigation { get; set; }
        public Tipopersona IdtipopersonaNavigation { get; set; }
        public ICollection<Prestamoequipo> Prestamoequipo { get; set; }
        public ICollection<Prestamolaboratorio> Prestamolaboratorio { get; set; }
        public ICollection<Reservalaboratorio> Reservalaboratorio { get; set; }
    }
}
