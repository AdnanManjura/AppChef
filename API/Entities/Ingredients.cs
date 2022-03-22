using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Ingredients")]
    public class Ingredients
    {
        public int IngredientsId { get; set; }
        public string IngredientsName { get; set; }
        public float Quantity { get; set; }
        public string MesureUnit { get; set; }
        public float Price { get; set; }

    }
}