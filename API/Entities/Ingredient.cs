using API.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Ingredient")]
    public class Ingredient
    {
        public int Id { get; set; }

        public string IngredientName { get; set; }

        public float PurchaseQuantity { get; set; }

        public MeasureUnitEnum PurchaseMeasureUnit { get; set; }

        public float Price { get; set; }

        public List<RecipeDetails> RecipeDetailsList { get; set; }

    }
}