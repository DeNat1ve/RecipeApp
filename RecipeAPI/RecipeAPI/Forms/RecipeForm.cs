using System.ComponentModel.DataAnnotations;

namespace RecipeAPI.Forms
{
    public class RecipeForm
    {
        [Required]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        [Required]
        public string Type { get; set; } = null!;
        [Required]
        public string Instruction { get; set; } = null!;
        public string? ImagePath { get; set; }
    }
}
