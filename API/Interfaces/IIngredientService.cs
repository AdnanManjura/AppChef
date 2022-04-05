using API.Entities;

namespace API.Interfaces
{
    public interface IIngredientService
    {
         Task<IEnumerable<Ingredient>> GetIngredients();
    }
}