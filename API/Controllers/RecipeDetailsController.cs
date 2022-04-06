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
        private readonly IRecipeDetailService _RecipeDetailService;

        public RecipeDetailsController(IRecipeDetailService RecipeDetailService)
        {
            _RecipeDetailService = RecipeDetailService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDetails>>> GetRecipeDetails()
        {
            return await _RecipeDetailService.GetRecipeDetails();
        }

        [HttpGet]
        [Route("getingredientsbyrecipe/{recipeId}")]
        public async Task<IEnumerable<RecipeDetails>> GetIngredientsByRecipe(int recipeId)
        {
            return await _RecipeDetailService.GetIngredientsByRecipe(recipeId);
        }
    }
}