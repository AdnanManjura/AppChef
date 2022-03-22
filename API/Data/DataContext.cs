using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RecipeDetails>().HasNoKey();
        }
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<RecipeDetails> RecipeDetails { get; set; }
        public DbSet<Ingredients> Ingredients { get; set; }
    }
}