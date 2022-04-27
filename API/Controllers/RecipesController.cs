using API.Data;
using API.DTOs;
using API.Interfaces;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class RecipesController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IRecipeService _recipeService;
        public RecipesController(DataContext context, IRecipeService recipeService)
        {
            _recipeService = recipeService;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDto>>> GetRecipes()
        {
            var recipes = await _recipeService.GetRecipes();
            return Ok(recipes);
        }

        [HttpGet("{recipeId}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int recipeId)
        {
            if (recipeId < 1)
                return BadRequest();

            return await _recipeService.GetRecipe(recipeId);
        }

        [HttpGet]
        [Route("getrecipes/{categoryId}")]
        public async Task<IActionResult> GetRecipesByCategory(int categoryId)
        {
            var recipes = await _recipeService.GetRecipesByCategory(categoryId); 
            return Ok(recipes);
        }

        [HttpPost("addRecipe")]
        public async Task<ActionResult<RecipeDto>> AddRecipe(Recipe recipeR)
        {
            var recipe = await _recipeService.AddRecipe(recipeR); 
            return Ok(recipe);
        }
    }
}