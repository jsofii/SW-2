﻿using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Materia
    {
        public Materia()
        {
            Horario = new HashSet<Horario>();
            Reservas = new HashSet<Reservas>();
        }

        public int Idmateria { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public int? Carrera { get; set; }
        public string Estado { get; set; }

        public Carrera CarreraNavigation { get; set; }
        public ICollection<Horario> Horario { get; set; }
        public ICollection<Reservas> Reservas { get; set; }
    }
}
