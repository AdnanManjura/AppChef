using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class IngredientsController : BaseApiController
    {
        private readonly IIngredientService _ingredientService;
        public IngredientsController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }
        [HttpGet]
        public async Task<IActionResult> GetIngredients()
        {
            var ingredients = await _ingredientService.GetIngredients();
            return Ok(ingredients);
        }
        [HttpGet("{ingredientId}")]
        public async Task<IActionResult> GetIngredient(int ingredientId)
        {
            if (ingredientId < 1)
                return BadRequest();

            var ingredient = await _ingredientService.GetIngredient(ingredientId); 
            return Ok(ingredient);
        }
    }
}