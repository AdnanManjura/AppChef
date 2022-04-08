using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
       
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<RecipeDetails> RecipeDetails { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
         
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
             modelBuilder.Entity<RecipeDetails>()
               .HasKey(bc => new { bc.IngredientId, bc.RecipeId });

            modelBuilder.Entity<RecipeDetails>()
                .HasOne(bc => bc.Ingredient)
                .WithMany(b => b.RecipeDetailsList)
                .HasForeignKey(bc => bc.IngredientId);

            modelBuilder.Entity<RecipeDetails>()
                .HasOne(bc => bc.Recipe)
                .WithMany(c => c.RecipeDetailsList)
                .HasForeignKey(bc => bc.RecipeId);
        }
    }
}