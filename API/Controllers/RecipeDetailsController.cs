using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class RecipeDetailsController : BaseApiController
    {
        private readonly DataContext _context;

        public RecipeDetailsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDetails>>> GetRecipeDetails()
        {
            return await _context.RecipeDetails.ToListAsync();
        }

        [HttpGet]
        [Route("getrecipeinrecipedetails/{recipeId}")]

        public async Task<ActionResult<IEnumerable<RecipeDetails>>> GetRecipeInRecipeDetails(int recipeId){
            List<RecipeDetails> rd = await _context.RecipeDetails.Where(x => x.RecipeId == recipeId).ToListAsync();
            foreach (var recipe in rd)
            {
                recipe.Ingredient = await _context.Ingredient.SingleAsync(x => x.Id == recipe.IngredientsId);
            }
            

            return rd;
        }

        [HttpGet]
        [Route("getingredientsbyrecipe/{recipeId}")]
        public async Task<IEnumerable<RecipeDetails>> GetIngredientsByRecipe(int recipeId)
        {
            return await _context.RecipeDetails.Where(u => u.RecipeId == recipeId).ToListAsync();
        }
    }
}