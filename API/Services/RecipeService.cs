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
            return await _context.Recipes.FindAsync(recipeId);
        }
       
        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
           return await _context.Recipes.ToListAsync();
        }
       
        public async Task<IEnumerable<Recipe>> GetRecipesByCategory(int categoryId)
        {
            return await _context.Recipes.Where(u => u.CategoryId == categoryId).ToListAsync();
        }

        public async Task<ActionResult<Recipe>> AddRecipe(Recipe recipeR)
        {
            var recipe = new Recipe
            {
                Name = recipeR.Name,
                Photo = recipeR.Photo,
                Description = recipeR.Description,
                CategoryId = recipeR.CategoryId,
                Category = recipeR.Category,
                RecipeDetailList = recipeR.RecipeDetailList
            };
            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();

            return recipe;
        }
    }
}