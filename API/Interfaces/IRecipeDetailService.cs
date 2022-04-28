using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IRecipeDetailService
    {
        Task<ActionResult<IEnumerable<RecipeDetail>>> GetRecipeDetails();
        Task<IEnumerable<RecipeDetailDto>> GetIngredientsByRecipe(int recipeId);
    }
}