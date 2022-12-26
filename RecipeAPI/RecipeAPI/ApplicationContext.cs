using Microsoft.EntityFrameworkCore;
using RecipeAPI.Models;

namespace RecipeAPI
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) 
        {
            //Database.EnsureCreated();
        }

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeType> RecipeTypes { get; set; }
    }
}
