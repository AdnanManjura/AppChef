using API.Entities;

namespace API.DTOs
{
    public class CategoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Photo { get; set; }        

        public List<Recipe> Recipes { get; set; }
    }
}