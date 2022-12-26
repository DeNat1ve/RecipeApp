namespace RecipeAPI.Models.CustomModels
{
    public class RecipeWithType
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public string Type { get; set; } = null!;
        public string Instruction { get; set; } = null!;
        public string? ImagePath { get; set; }
    }
}
