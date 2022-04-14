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
        private readonly IRecipeDetailService _recipeDetailService;

        public RecipeDetailsController(IRecipeDetailService recipeDetailService)
        {
            _recipeDetailService = recipeDetailService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDetails>>> GetRecipeDetails()
        {
            return await _recipeDetailService.GetRecipeDetails();
        }

        [HttpGet]
        [Route("getingredientsbyrecipe/{recipeId}")]
        public async Task<IActionResult> GetIngredientsByRecipe(int recipeId)
        {
            return Ok(await _recipeDetailService.GetIngredientsByRecipe(recipeId));
        }
    }
}