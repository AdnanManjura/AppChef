using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IIngredientService
    {
         Task<IEnumerable<Ingredient>> GetIngredients();
         Task<ActionResult<Ingredient>> GetIngredient(int id);
    }
}