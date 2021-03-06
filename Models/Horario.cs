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
        public int Horadeinicio { get; set; }
        public int Horadefin { get; set; }
        public int Dia { get; set; }

        public virtual Ciclo IdcicloNavigation { get; set; }
        public virtual Laboratorio IdlaboratorioNavigation { get; set; }
        public virtual Materia IdmateriaNavigation { get; set; }
    }
}
