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
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            var recipes = await _recipeService.GetRecipes();
            return Ok(recipes);
        }

        [HttpPost("addRecipe")]
        public async Task<ActionResult<Recipe>> AddRecipe(Recipe recipeR)
        {
            var recipe = new Recipe
            {
                RecipeName = recipeR.RecipeName,
                RecipePhoto = recipeR.RecipePhoto,
                Description = recipeR.Description,
                CategoryId = recipeR.CategoryId,
                Category = recipeR.Category,
                RecipeDetailsList = recipeR.RecipeDetailsList
            };
            _context.Recipe.Add(recipe);
            await _context.SaveChangesAsync();

            return recipe;
            // return new RecipeDto
            // {
            //     RecipeName = recipe.RecipeName,
            //     RecipePhoto = recipe.RecipePhoto,
            //     Description = recipe.Description,
            //     CategoryId = recipe.CategoryId,
            //     Category = recipe.Category,
            //     RecipeDetailsList = recipe.RecipeDetailsList
            // };

        }

        [HttpGet("{RecipeId}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int recipeId)
        {
            if (recipeId < 1)
                return BadRequest();

            return await _recipeService.GetRecipe(recipeId);
        }

        [HttpGet]
        [Route("getrecipebycategory/{categoryId}")]
        public async Task<IEnumerable<Recipe>> GetRecipeByCategory(int categoryId)
        {
            return await _recipeService.GetRecipeByCategory(categoryId);
        }
    }
}