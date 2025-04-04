using System.ComponentModel.DataAnnotations;

namespace SHAPETask.Models
{
    public class SignupViewModel
    {
        [Required, MaxLength(12, ErrorMessage = "First name can be up to 12 characters.")]
        public string FirstName { get; set; }

        [Required, MaxLength(16, ErrorMessage = "Last name can be up to 16 characters.")]
        public string LastName { get; set; }

        [Required, EmailAddress(ErrorMessage = "Must be a valid email address.")]
        public string Email { get; set; }

        [Required, MinLength(8, ErrorMessage = "Password must have at least 8 characters.")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$",
            ErrorMessage = "Password must include 1 uppercase, 1 lowercase, 1 number, and 1 special character.")]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Passwords do not match.")]
        public string ConfirmPassword { get; set; }
    }
}
