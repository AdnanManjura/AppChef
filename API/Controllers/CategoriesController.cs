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

    public class CategoriesController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ICategoryService _categoryService;
        public CategoriesController(DataContext context, ICategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = await _categoryService.GetCategories();
            return Ok(categories);
        }

        [HttpGet("{CategoryId}")]
        public async Task<ActionResult<Category>> GetCategory(int categoryId)
        {
            if(categoryId < 1)
                return BadRequest();

            return await _context.Category.FindAsync(categoryId);
        }
    }
}