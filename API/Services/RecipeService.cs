using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly DataContext _context;
        public RecipeService(DataContext context)
        {
           _context = context;
        }

        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await _context.Recipe.ToListAsync();
        }
    }
}