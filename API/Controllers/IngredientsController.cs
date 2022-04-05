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
        private readonly DataContext _context;
        private readonly IIngredientService _ingredientService;
        public IngredientsController(DataContext context, IIngredientService ingredientService)
        {
            _context = context;
            _ingredientService = ingredientService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredients()
        {
            var ingredients = await _ingredientService.GetIngredients();
            return Ok(ingredients);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Ingredient>> GetIngredient(int id)
        {
            if (id < 1)
                return BadRequest();

            return await _context.Ingredient.FindAsync(id);
        }
    }
}