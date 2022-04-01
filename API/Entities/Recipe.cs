using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Recipe")]

    public class Recipe
    {
        public int Id { get; set; }

        public string RecipeName { get; set; }

        public byte[] RecipePhoto { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public List<RecipeDetails> RecipeDetailsList { get; set; }
    }
}