using Microsoft.EntityFrameworkCore;
using SHAPETask.Models;

namespace SHAPETask.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }  
    }
}
