namespace API.Entities
{
   public class Recipe
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Photo { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public List<RecipeDetail> RecipeDetails { get; set; }
    }
}