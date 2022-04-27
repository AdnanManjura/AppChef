using API.Interfaces;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<IEnumerable<RecipeDetailsDto>>> GetRecipeDetails()
        {
            var recipeDetails = await _recipeDetailService.GetRecipeDetails();
            return Ok(recipeDetails);
        }

        [HttpGet]
        [Route("getingredients/{recipeId}")]
        public async Task<IActionResult> GetIngredientsByRecipe(int recipeId)
        {
            if (recipeId < 1)
                return BadRequest();

            var recipeDetails = await _recipeDetailService.GetIngredientsByRecipe(recipeId);
            return Ok(recipeDetails);
        }
    }
}