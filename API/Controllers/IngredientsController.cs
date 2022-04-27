using API.Entities;
using API.Interfaces;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<IEnumerable<IngredientDto>>> GetIngredients()
        {
            var ingredients = await _ingredientService.GetIngredients();
            return Ok(ingredients);
        }
        
        [HttpGet("{ingredientId}")]
        public async Task<ActionResult<Ingredient>> GetIngredient(int ingredientId)
        {
            if (ingredientId < 1)
                return BadRequest();

            return await _ingredientService.GetIngredient(ingredientId); 
        }
    }
}