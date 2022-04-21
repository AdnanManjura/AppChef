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

        public async Task<IEnumerable<RecipeDetail>> GetRecipeDetails()
        {
            return await _context.RecipeDetails
            .Include(x => x.Ingredient)
            .ToListAsync();
        }

        public async Task<IEnumerable<RecipeDetailDto>> GetIngredients(int recipeId)
        {
            return await _context.RecipeDetails
                .Include(x => x.Ingredient)
                .Where(y => y.RecipeId == recipeId)
                .Select(z => new RecipeDetailDto(){
                    RecipeId = z.RecipeId,
                    IngredientId = z.IngredientId,
                    Quantity = z.Quantity,
                    MeasureUnit = z.MeasureUnit,
                    Ingredient = z.Ingredient,
                    Recipe = z.Recipe,
                    Cost = CostCalculator.CalculateRecipeDetailCost(z.Quantity, z.MeasureUnit, z.Ingredient.PurchaseQuantity, z.Ingredient.Price, z.Ingredient.PurchaseMeasureUnit),
                })
                .ToListAsync();
        }
    }
}