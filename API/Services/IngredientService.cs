using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly DataContext _context;
        public IngredientService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Ingredient>> GetIngredients()
        {
            return await _context.Ingredient.ToListAsync();
        }
    }
}