using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeAPI.Models
{
    public class RecipeType
    {
        public int Id { get; set; }
        [MaxLength(20)]
        public int Type { get; set; }
        [ForeignKey("Recipe_Id")]
        public Recipe Recipe { get; set; } = null!;
    }
}
