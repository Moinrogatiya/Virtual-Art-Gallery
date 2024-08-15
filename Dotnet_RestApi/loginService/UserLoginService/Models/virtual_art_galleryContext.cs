using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace UserLoginService.Models
{
    public partial class virtual_art_galleryContext : DbContext
    {
        public virtual_art_galleryContext()
        {
        }

        public virtual_art_galleryContext(DbContextOptions<virtual_art_galleryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<Artist> Artists { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=virtual_art_gallery", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Area>(entity =>
            {
                entity.ToTable("area");

                entity.HasIndex(e => e.CityId, "city_id_idx");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.AreaName)
                    .HasMaxLength(80)
                    .HasColumnName("area_name");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.Pincode).HasColumnName("pincode");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("city_id");
            });

            modelBuilder.Entity<Artist>(entity =>
            {
                entity.ToTable("artist");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.About)
                    .HasMaxLength(200)
                    .HasColumnName("about");

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.Artist)
                    .HasForeignKey<Artist>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("userid_fk");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(50)
                    .HasColumnName("city_name");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(50)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.AreaId, "area_id_idx");

                entity.HasIndex(e => e.RoleId, "role_id_fk_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasMaxLength(200)
                    .HasColumnName("address");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(20)
                    .HasColumnName("contact");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(45)
                    .HasColumnName("email_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(45)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(45)
                    .HasColumnName("last_name");

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .HasColumnName("password");

                entity.Property(e => e.ProfilePhoto)
                    .HasColumnType("blob")
                    .HasColumnName("profile_photo");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(45)
                    .HasColumnName("username");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.AreaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("area_id_fk");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("role_id_fk");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
