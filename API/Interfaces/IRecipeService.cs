using API.Entities;

namespace API.Interfaces
{
    public interface IRecipeService
    {
         Task<IEnumerable<Recipe>> GetRecipes();
    }
}