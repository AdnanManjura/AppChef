using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IRecipeService
    {
         Task<IEnumerable<Recipe>> GetRecipes();
         Task<ActionResult<Recipe>> GetRecipe(int recipeId);
         Task<IEnumerable<Recipe>> GetRecipeByCategory(int categoryId);
    }
}