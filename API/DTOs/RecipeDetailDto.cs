using API.Entities;
using API.Enums;

namespace API.DTOs
{
    public class RecipeDetailDto
    {
        public float Cost { get; set; }
         
        public float Quantity { get; set; }

        public MeasureUnitEnum MeasureUnit { get; set; }

        public int RecipeId { get; set; }

        public Recipe Recipe { get; set; }

        public int IngredientId { get; set; }

        public Ingredient Ingredient { get; set; }
    }
}