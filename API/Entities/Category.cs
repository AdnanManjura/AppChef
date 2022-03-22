using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Category")]
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public byte[] CategoryPhoto { get; set; }
    }
}