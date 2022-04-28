using API.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public float PurchaseQuantity { get; set; }

        public MeasureUnitEnum PurchaseMeasureUnit { get; set; }

        public float Price { get; set; }

        public List<RecipeDetail> RecipeDetailList { get; set; }
    }
}