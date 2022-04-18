using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.DTOs;

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
        public async Task<IActionResult> GetRecipes()
        {
            var recipes = await _recipeService.GetRecipes();
            return Ok(recipes);
        }

        [HttpPost("addRecipe")]
        public async Task<ActionResult<Recipe>> AddRecipe(Recipe recipeR)
        {
            var recipe = await _recipeService.AddRecipe(recipeR); 
            return Ok(recipe);
        }

        [HttpGet("{recipeId}")]
        public async Task<IActionResult> GetRecipe(int recipeId)
        {
            if (recipeId < 1)
                return BadRequest();

            var recipe = await _recipeService.GetRecipe(recipeId); 
            return Ok(recipe);
        }

        [HttpGet]
        [Route("getrecipes/{categoryId}")]
        public async Task<IActionResult> GetRecipes(int categoryId)
        {
            var recipes = await _recipeService.GetRecipes(categoryId); 
            return Ok(recipes);
        }
    }
}