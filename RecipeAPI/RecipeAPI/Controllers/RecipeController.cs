using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeAPI.Enums;
using RecipeAPI.Forms;
using RecipeAPI.Models;
using RecipeAPI.Models.CustomModels;

namespace RecipeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private ApplicationContext _db;

        public RecipeController(ApplicationContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("GetAllRecipes")]
        public IEnumerable<RecipeWithType> GetAllRecipes()
        {
            List<RecipeWithType> result = new List<RecipeWithType>();

            var recipes = _db.Recipes.Include(r => r.RecipeType).ToList();

            foreach(var recipe in recipes)
            {
                result.Add(new RecipeWithType()
                {
                    Name = recipe.Name,
                    Description = recipe.Description,
                    Instruction = recipe.Instruction,
                    ImagePath = recipe.ImagePath,
                    Type = Enum.GetName(typeof(RecipeTypes), recipe.RecipeType.Type)!
                }) ;
            }

            return result;
        }

        [HttpPost]
        [Route("AddRecipe")]
        public void AddRecipe(RecipeForm newRecipe)
        {
            if(string.IsNullOrWhiteSpace(newRecipe.Description))
                newRecipe.Description = null;
            if (string.IsNullOrWhiteSpace(newRecipe.ImagePath))
                newRecipe.ImagePath = null;

            var recipe = new Recipe()
            {
                Name = newRecipe.Name,
                Description = newRecipe.Description,
                Instruction = newRecipe.Instruction,
                ImagePath = newRecipe.ImagePath,
            };

            int type = 0;

            if (Enum.TryParse(typeof(RecipeTypes), newRecipe.Type, out object res))
                type = (int)res;

            recipe.RecipeType = new RecipeType()
            {
                Recipe = recipe,
                Type = type
            };

            _db.Recipes.Add(recipe);
            _db.SaveChanges();
        }
    }
}
