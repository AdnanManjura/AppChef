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
    
    public class RecipesController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IRecipeService _recipeService;
        public RecipesController(DataContext context, IRecipeService recipeService)
        {
            _context = context;
            _recipeService = recipeService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes(){
            var recipes = await _recipeService.GetRecipes(); 
            return Ok(recipes);
        }
        
        [HttpGet("{RecipeId}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int recipeId)
        {
            if(recipeId < 1)
                return BadRequest();

            return await _context.Recipe.FindAsync(recipeId);
        }

        [HttpGet]
        [Route ("getrecipebycategory/{categoryId}")]
        public async Task<IEnumerable<Recipe>> GetRecipeByCategory(int categoryId) {
              return await _context.Recipe.Where(u => u.CategoryId == categoryId).ToListAsync();
        }
    }
}