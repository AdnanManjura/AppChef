using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class RecipeDetailService : IRecipeDetailService
    {
        private readonly DataContext _context;

        public RecipeDetailService(DataContext context)
        {
            _context = context;
        }

         public async Task<ActionResult<IEnumerable<RecipeDetails>>> GetRecipeDetails()
         {
             return await _context.RecipeDetails.ToListAsync();
         }
        
    }
}