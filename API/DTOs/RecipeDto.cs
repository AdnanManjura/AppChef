using API.Entities;

namespace API.DTOs
{
    public class RecipeDto
    {
        public int Id { get; set; }

        public string RecipeName { get; set; }

        public string RecipePhoto { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public List<RecipeDetails> RecipeDetailsList { get; set; }
    }
}