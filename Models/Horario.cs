﻿using System;
using System.Collections.Generic;

namespace SW_2.Models
{
    public partial class Horario
    {
        public int Idhorario { get; set; }
        public int Idlaboratorio { get; set; }
        public int Idmateria { get; set; }
        public int Idciclo { get; set; }
        public string Horadeinicio { get; set; }
        public string Horadefin { get; set; }
        public string Dia { get; set; }

        public Ciclo IdcicloNavigation { get; set; }
        public Laboratorio IdlaboratorioNavigation { get; set; }
        public Materia IdmateriaNavigation { get; set; }
    }
}
