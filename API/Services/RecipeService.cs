using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
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

        public async Task<ActionResult<Recipe>> GetRecipe(int recipeId)
        {
            return await _context.Recipe.FindAsync(recipeId);
        }
       
        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
           return await _context.Recipe.ToListAsync();
        }
       
        public async Task<IEnumerable<Recipe>> GetRecipesByCategory(int categoryId)
        {
            return await _context.Recipe.Where(u => u.CategoryId == categoryId).ToListAsync();
        }
    }
}