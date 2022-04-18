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
        [Route("getingredients/{recipeId}")]
        public async Task<IActionResult> GetIngredients(int recipeId)
        {
            var recipeDetail = await _recipeDetailService.GetIngredients(recipeId);
            return Ok(recipeDetail);
        }
    }
}