using System.ComponentModel.DataAnnotations;

namespace SHAPETask.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required, MaxLength(12)]
        public string FirstName { get; set; }

        [Required, MaxLength(16)]
        public string LastName { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; } // Hashed password stored in DB
    }
}
