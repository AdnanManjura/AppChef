using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }

        public string CategoryName { get; set; }

        public byte[] CategoryPhoto { get; set; }
        
        public List<Recipe> Recipes { get; set; }
    }
}