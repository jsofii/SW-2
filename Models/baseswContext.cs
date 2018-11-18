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
        public virtual DbSet<Equipo> Equipo { get; set; }
        public virtual DbSet<Horario> Horario { get; set; }
        public virtual DbSet<Laboratorio> Laboratorio { get; set; }
        public virtual DbSet<Listanegra> Listanegra { get; set; }
        public virtual DbSet<Materia> Materia { get; set; }
        public virtual DbSet<Persona> Persona { get; set; }
        public virtual DbSet<Prestamoequipo> Prestamoequipo { get; set; }
        public virtual DbSet<Prestamolaboratorio> Prestamolaboratorio { get; set; }
        public virtual DbSet<Reservalaboratorio> Reservalaboratorio { get; set; }
        public virtual DbSet<Tipopersona> Tipopersona { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=DESKTOP-NQEJ9JQ\\DBSOFIA;user=sa;password=sofi;database=basesw");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ciclo>(entity =>
            {
                entity.HasKey(e => e.Idciclo);

                entity.ToTable("CICLO");

                entity.Property(e => e.Idciclo).HasColumnName("IDCICLO");

                entity.Property(e => e.Fechafin)
                    .HasColumnName("FECHAFIN")
                    .HasColumnType("date");

                entity.Property(e => e.Fechainicio)
                    .HasColumnName("FECHAINICIO")
                    .HasColumnType("date");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Equipo>(entity =>
            {
                entity.HasKey(e => e.Idequipo);

                entity.ToTable("EQUIPO");

                entity.Property(e => e.Idequipo).HasColumnName("IDEQUIPO");

                entity.Property(e => e.Codigo)
                    .IsRequired()
                    .HasColumnName("CODIGO")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasColumnName("ESTADO")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Marca)
                    .IsRequired()
                    .HasColumnName("MARCA")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Tipo)
                    .IsRequired()
                    .HasColumnName("TIPO")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Horario>(entity =>
            {
                entity.HasKey(e => e.Idhorario);

                entity.ToTable("HORARIO");

                entity.Property(e => e.Idhorario).HasColumnName("IDHORARIO");

                entity.Property(e => e.Dia)
                    .IsRequired()
                    .HasColumnName("DIA")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Horadefin)
                    .IsRequired()
                    .HasColumnName("HORADEFIN")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Horadeinicio)
                    .IsRequired()
                    .HasColumnName("HORADEINICIO")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Idciclo).HasColumnName("IDCICLO");

                entity.Property(e => e.Idlaboratorio).HasColumnName("IDLABORATORIO");

                entity.Property(e => e.Idmateria).HasColumnName("IDMATERIA");

                entity.HasOne(d => d.IdcicloNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idciclo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HORARIO_CICLO");

                entity.HasOne(d => d.IdlaboratorioNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idlaboratorio)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HORARIO_LABORATORIO1");

                entity.HasOne(d => d.IdmateriaNavigation)
                    .WithMany(p => p.Horario)
                    .HasForeignKey(d => d.Idmateria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HORARIO_MATERIA");
            });

            modelBuilder.Entity<Laboratorio>(entity =>
            {
                entity.HasKey(e => e.Idlaboratorio);

                entity.ToTable("LABORATORIO");

                entity.Property(e => e.Idlaboratorio).HasColumnName("IDLABORATORIO");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Numero).HasColumnName("NUMERO");
            });

            modelBuilder.Entity<Listanegra>(entity =>
            {
                entity.HasKey(e => e.Idlistanegra);

                entity.ToTable("LISTANEGRA");

                entity.Property(e => e.Idlistanegra)
                    .HasColumnName("IDLISTANEGRA")
                    .ValueGeneratedNever();

                entity.Property(e => e.Fecharegistro)
                    .HasColumnName("FECHAREGISTRO")
                    .HasColumnType("date");

                entity.Property(e => e.Idpersona).HasColumnName("IDPERSONA");

                entity.Property(e => e.Idprestamoequipo).HasColumnName("IDPRESTAMOEQUIPO");

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithMany(p => p.Listanegra)
                    .HasForeignKey(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LISTANEGRA_PERSONA");

                entity.HasOne(d => d.IdprestamoequipoNavigation)
                    .WithMany(p => p.Listanegra)
                    .HasForeignKey(d => d.Idprestamoequipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LISTANEGRA_PRESTAMOEQUIPO");
            });

            modelBuilder.Entity<Materia>(entity =>
            {
                entity.HasKey(e => e.Idmateria);

                entity.ToTable("MATERIA");

                entity.Property(e => e.Idmateria).HasColumnName("IDMATERIA");

                entity.Property(e => e.Codigo)
                    .IsRequired()
                    .HasColumnName("CODIGO")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(70)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Persona>(entity =>
            {
                entity.HasKey(e => e.Idpersona);

                entity.ToTable("PERSONA");

                entity.Property(e => e.Idpersona)
                    .HasColumnName("IDPERSONA")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Identificacionpersonal)
                    .IsRequired()
                    .HasColumnName("IDENTIFICACIONPERSONAL")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nombrecompleto)
                    .IsRequired()
                    .HasColumnName("NOMBRECOMPLETO")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Tipopersona).HasColumnName("TIPOPERSONA");

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithOne(p => p.Persona)
                    .HasForeignKey<Persona>(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PERSONA_TIPOPERSONA");
            });

            modelBuilder.Entity<Prestamoequipo>(entity =>
            {
                entity.HasKey(e => e.Idprestamoequipo);

                entity.ToTable("PRESTAMOEQUIPO");

                entity.Property(e => e.Idprestamoequipo).HasColumnName("IDPRESTAMOEQUIPO");

                entity.Property(e => e.Estadodevolucion)
                    .IsRequired()
                    .HasColumnName("ESTADODEVOLUCION")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Estadoequipo)
                    .IsRequired()
                    .HasColumnName("ESTADOEQUIPO")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Fechadevolucion)
                    .HasColumnName("FECHADEVOLUCION")
                    .HasColumnType("date");

                entity.Property(e => e.Fechaprestamo)
                    .HasColumnName("FECHAPRESTAMO")
                    .HasColumnType("date");

                entity.Property(e => e.Idencargado).HasColumnName("IDENCARGADO");

                entity.Property(e => e.Idequipo).HasColumnName("IDEQUIPO");

                entity.Property(e => e.Idpersona).HasColumnName("IDPERSONA");

                entity.HasOne(d => d.IdencargadoNavigation)
                    .WithMany(p => p.Prestamoequipo)
                    .HasForeignKey(d => d.Idencargado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOEQUIPO_USUARIO");

                entity.HasOne(d => d.IdequipoNavigation)
                    .WithMany(p => p.Prestamoequipo)
                    .HasForeignKey(d => d.Idequipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOEQUIPO_EQUIPO");

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithMany(p => p.Prestamoequipo)
                    .HasForeignKey(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOEQUIPO_PERSONA");
            });

            modelBuilder.Entity<Prestamolaboratorio>(entity =>
            {
                entity.HasKey(e => e.Idprestamolaboratorio);

                entity.ToTable("PRESTAMOLABORATORIO");

                entity.Property(e => e.Idprestamolaboratorio).HasColumnName("IDPRESTAMOLABORATORIO");

                entity.Property(e => e.Fecha)
                    .HasColumnName("FECHA")
                    .HasColumnType("date");

                entity.Property(e => e.Horadeentrada)
                    .IsRequired()
                    .HasColumnName("HORADEENTRADA")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Horadesalida)
                    .IsRequired()
                    .HasColumnName("HORADESALIDA")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Idencargado).HasColumnName("IDENCARGADO");

                entity.Property(e => e.Idlaboratorio).HasColumnName("IDLABORATORIO");

                entity.Property(e => e.Idpersona).HasColumnName("IDPERSONA");

                entity.HasOne(d => d.IdencargadoNavigation)
                    .WithMany(p => p.Prestamolaboratorio)
                    .HasForeignKey(d => d.Idencargado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOLABORATORIO_USUARIO");

                entity.HasOne(d => d.IdlaboratorioNavigation)
                    .WithMany(p => p.Prestamolaboratorio)
                    .HasForeignKey(d => d.Idlaboratorio)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOLABORATORIO_LABORATORIO");

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithMany(p => p.Prestamolaboratorio)
                    .HasForeignKey(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PRESTAMOLABORATORIO_PERSONA");
            });

            modelBuilder.Entity<Reservalaboratorio>(entity =>
            {
                entity.HasKey(e => e.Idreservalaboratorio);

                entity.ToTable("RESERVALABORATORIO");

                entity.Property(e => e.Idreservalaboratorio).HasColumnName("IDRESERVALABORATORIO");

                entity.Property(e => e.Estadoreserva)
                    .IsRequired()
                    .HasColumnName("ESTADORESERVA")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Fecha)
                    .HasColumnName("FECHA")
                    .HasColumnType("date");

                entity.Property(e => e.Horadefin)
                    .IsRequired()
                    .HasColumnName("HORADEFIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Horadeinicio)
                    .IsRequired()
                    .HasColumnName("HORADEINICIO")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Idlaboratorio).HasColumnName("IDLABORATORIO");

                entity.Property(e => e.Idusuario).HasColumnName("IDUSUARIO");

                entity.Property(e => e.Motivoreserva)
                    .IsRequired()
                    .HasColumnName("MOTIVORESERVA")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdlaboratorioNavigation)
                    .WithMany(p => p.Reservalaboratorio)
                    .HasForeignKey(d => d.Idlaboratorio)
                    .OnDelete(DeleteBehavior.ClientSetNull)
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

                entity.ToTable("TIPOPERSONA");

                entity.Property(e => e.Idtipopersona).HasColumnName("IDTIPOPERSONA");

                entity.Property(e => e.Nombre)
                    .HasColumnName("NOMBRE")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Idusuario);

                entity.ToTable("USUARIO");

                entity.Property(e => e.Idusuario).HasColumnName("IDUSUARIO");

                entity.Property(e => e.Idpersona).HasColumnName("IDPERSONA");

                entity.Property(e => e.Idtipopersona).HasColumnName("IDTIPOPERSONA");

                entity.Property(e => e.Nombreusuario)
                    .IsRequired()
                    .HasColumnName("NOMBREUSUARIO")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdpersonaNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.Idpersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USUARIO_PERSONA");

                entity.HasOne(d => d.IdtipopersonaNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.Idtipopersona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USUARIO_TIPOPERSONA");
            });
        }
    }
}
