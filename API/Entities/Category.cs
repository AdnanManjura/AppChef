using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Photo { get; set; }
        
        public List<Recipe> Recipes { get; set; }
    }
}