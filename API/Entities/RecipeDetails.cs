using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("RecipeDetails")]
    public class RecipeDetails
    {
        public float Quantity { get; set; }
        public int IngredientsId { get; set; }
        public int RecipeId { get; set; }

    }
}