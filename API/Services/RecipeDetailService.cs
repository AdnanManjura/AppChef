using API.Data;
using API.DTOs;
using API.Entities;
using API.Helpers;
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
            return await _context.RecipeDetails.Include(x => x.Ingredient).ToListAsync();
        }

        public async Task<IEnumerable<RecipeDetailsDto>> GetIngredientsByRecipe(int recipeId)
        {
            return await _context.RecipeDetails
                .Include(x => x.Ingredient)
                .Where(u => u.RecipeId == recipeId)
                .Select(x => new RecipeDetailsDto(){
                    RecipeId = x.RecipeId,
                    IngredientId = x.IngredientId,
                    Quantity = x.Quantity,
                    MeasureUnit = x.MeasureUnit,
                    Ingredient = x.Ingredient,
                    Recipe = x.Recipe,
                    Cost = CostCalculator.CalculateRecipeDetailCost(x.Quantity, x.MeasureUnit, x.Ingredient.PurchaseQuantity, x.Ingredient.Price, x.Ingredient.PurchaseMesureUnit),
                })
                .ToListAsync();
        }
    }
}