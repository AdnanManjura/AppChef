using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
       
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeDetail> RecipeDetails { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
         
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
             modelBuilder.Entity<RecipeDetail>()
               .HasKey(bc => new { bc.IngredientId, bc.RecipeId });

            modelBuilder.Entity<RecipeDetail>()
                .HasOne(bc => bc.Ingredient)
                .WithMany(b => b.RecipeDetails)
                .HasForeignKey(bc => bc.IngredientId);

            modelBuilder.Entity<RecipeDetail>()
                .HasOne(bc => bc.Recipe)
                .WithMany(c => c.RecipeDetails)
                .HasForeignKey(bc => bc.RecipeId);
        }
    }
}