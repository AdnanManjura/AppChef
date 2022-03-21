using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Recipe")]

    public class Recipe
    {
        public int RecipeId { get; set; }
        public string RecipeName { get; set; }
        public byte[] RecipePhoto { get; set; }
        public List<RecipeDetails> RecipeDetails { get; set;}

        public Category Category { get; set; }
        public int CategoryId { get; set; }
        
    }
}