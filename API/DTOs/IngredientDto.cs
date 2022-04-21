using API.Entities;
using API.Enums;

namespace API.DTOs
{
    public class IngredientDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public float PurchaseQuantity { get; set; }

        public MeasureUnitEnum PurchaseMeasureUnit { get; set; }

        public float Price { get; set; }

        public List<RecipeDetail> RecipeDetails { get; set; }
        
    }
}