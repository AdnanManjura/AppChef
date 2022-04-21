using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IRecipeDetailService
    {
        Task<IEnumerable<RecipeDetail>> GetRecipeDetails();
        Task<IEnumerable<RecipeDetailDto>> GetIngredients(int recipeId);
    }
}