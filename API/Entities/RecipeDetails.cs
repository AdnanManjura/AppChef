using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("RecipeDetails")]
    public class RecipeDetails
    {
        public int RecipeDetailsId { get; set; }
        public string Descriptop { get; set; }
        public int IngredientsId { get; set; }
        public Ingredients Ingredients { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}