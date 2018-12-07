using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SW_2.Models
{
    public partial class baseswContext : DbContext
    {
        public baseswContext()
        {
        }

        public baseswContext(DbContextOptions<baseswContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ciclo> Ciclo { get; set; }
        public virtual DbSet<Horario> Horario { get; set; }
        public virtual DbSet<Laboratorio> Laboratorio { get; set; }
        public virtual DbSet<Materia> Materia { get; set; }
        public virtual DbSet<Persona> Persona { get; set; }
        public virtual DbSet<Reservalaboratorio> Reservalaboratorio { get; set; }
        public virtual DbSet<Tipopersona> Tipopersona { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=;database=basesw");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ciclo>(entity =>
            {
                entity.HasKey(e => e.Idciclo);

                entity.ToTable("ciclo", "basesw");

                entity.Property(e => e.Idciclo)
                    .HasColumnName("IDCICLO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Fechafin)
                    .HasColumnName("FECHAFIN")
                    .HasColumnType("date");

                entity.Property(e => e.Fechainicio)
                    .HasColumnName("FECHAINICIO")
                    .HasColumnType("date");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Horario>(entity =>
            {
                entity.HasKey(e => e.Idhorario);

                entity.ToTable("horario", "basesw");

                entity.HasIndex(e => e.Idciclo)
                    .HasName("FK_HORARIO_CICLO");

                entity.HasIndex(e => e.Idlaboratorio)
                    .HasName("FK_HORARIO_LABORATORIO1");

                entity.HasIndex(e => e.Idmateria)
                    .HasName("FK_HORARIO_MATERIA");

                entity.Property(e => e.Idhorario)
                    .HasColumnName("IDHORARIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Dia)
                    .HasColumnName("DIA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Horadefin)
                    .HasColumnName("HORADEFIN")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Horadeinicio)
                    .HasColumnName("HORADEINICIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Idciclo)
                    .HasColumnName("IDCICLO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Idlaboratorio)
                    .HasColumnName("IDLABORATORIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Idmateria)
                    .HasColumnName("IDMATERIA")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.IdcicloNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idciclo)
                    .HasConstraintName("FK_HORARIO_CICLO");

                entity.HasOne(d => d.IdlaboratorioNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idlaboratorio)
                    .HasConstraintName("FK_HORARIO_LABORATORIO1");

                entity.HasOne(d => d.IdmateriaNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idmateria)
                    .HasConstraintName("FK_HORARIO_MATERIA");
            });

            modelBuilder.Entity<Laboratorio>(entity =>
            {
                entity.HasKey(e => e.Idlaboratorio);

                entity.ToTable("laboratorio", "basesw");

                entity.Property(e => e.Idlaboratorio)
                    .HasColumnName("IDLABORATORIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Numero)
                    .HasColumnName("NUMERO")
                    .HasColumnType("int(5)");
            });

            modelBuilder.Entity<Materia>(entity =>
            {
                entity.HasKey(e => e.Idmateria);

                entity.ToTable("materia", "basesw");

                entity.Property(e => e.Idmateria)
                    .HasColumnName("IDMATERIA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Codigo)
                    .IsRequired()
                    .HasColumnName("CODIGO")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Persona>(entity =>
            {
                entity.HasKey(e => e.Idpersona);

                entity.ToTable("persona", "basesw");

                entity.HasIndex(e => e.Idtipopersona)
                    .HasName("FK_PERSONA_TIPOPERSONA");

                entity.Property(e => e.Idpersona)
                    .HasColumnName("IDPERSONA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Correo)
                    .HasColumnName("correo")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Identificacionpersonal)
                    .HasColumnName("IDENTIFICACIONPERSONAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Idtipopersona)
                    .HasColumnName("IDTIPOPERSONA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombrecompleto)
                    .IsRequired()
                    .HasColumnName("NOMBRECOMPLETO")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdtipopersonaNavigation)
                    .WithMany(p => p.Persona)
                    .HasForeignKey(d => d.Idtipopersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PERSONA_TIPOPERSONA");
            });

            modelBuilder.Entity<Reservalaboratorio>(entity =>
            {
                entity.HasKey(e => e.Idreservalaboratorio);

                entity.ToTable("reservalaboratorio", "basesw");

                entity.HasIndex(e => e.Idlaboratorio)
                    .HasName("FK_RESERVALABORATORIO_LABORATORIO");

                entity.HasIndex(e => e.Idusuario)
                    .HasName("FK_RESERVALABORATORIO_USUARIO");

                entity.Property(e => e.Idreservalaboratorio)
                    .HasColumnName("IDRESERVALABORATORIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Estadoreserva)
                    .IsRequired()
                    .HasColumnName("ESTADORESERVA")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Fecha)
                    .HasColumnName("FECHA")
                    .HasColumnType("date");

                entity.Property(e => e.Horadefin)
                    .HasColumnName("HORADEFIN")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Horadeinicio)
                    .HasColumnName("HORADEINICIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Idlaboratorio)
                    .HasColumnName("IDLABORATORIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Idusuario)
                    .HasColumnName("IDUSUARIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Motivoreserva)
                    .IsRequired()
                    .HasColumnName("MOTIVORESERVA")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdlaboratorioNavigation)
                    .WithMany(p => p.Reservalaboratorio)
                    .HasForeignKey(d => d.Idlaboratorio)
                    .HasConstraintName("FK_RESERVALABORATORIO_LABORATORIO");

                entity.HasOne(d => d.IdusuarioNavigation)
                    .WithMany(p => p.Reservalaboratorio)
                    .HasForeignKey(d => d.Idusuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RESERVALABORATORIO_USUARIO");
            });

            modelBuilder.Entity<Tipopersona>(entity =>
            {
                entity.HasKey(e => e.Idtipopersona);

                entity.ToTable("tipopersona", "basesw");

                entity.Property(e => e.Idtipopersona)
                    .HasColumnName("IDTIPOPERSONA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombre)
                    .HasColumnName("NOMBRE")
                    .HasColumnType("char(30)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Idusuario);

                entity.ToTable("usuario", "basesw");

                entity.HasIndex(e => e.Idpersona)
                    .HasName("FK_USUARIO_PERSONA");

                entity.Property(e => e.Idusuario)
                    .HasColumnName("IDUSUARIO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Estado)
                    .HasColumnName("ESTADO")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Idpersona)
                    .HasColumnName("IDPERSONA")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Nombreusuario)
                    .IsRequired()
                    .HasColumnName("NOMBREUSUARIO")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USUARIO_PERSONA");
            });
        }
    }
}
