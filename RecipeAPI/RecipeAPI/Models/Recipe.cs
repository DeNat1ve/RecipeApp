using System.ComponentModel.DataAnnotations;

namespace RecipeAPI.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; } = null!;
        [MaxLength(500)]
        public string? Description { get; set; }
        [MaxLength(1000)]
        public string Instruction { get; set; } = null!;
        [MaxLength(500)]
        public string? ImagePath { get; set; }

        public RecipeType RecipeType { get; set; } = null!;
    }
}
