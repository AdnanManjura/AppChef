using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Username { get; set; }
        [Required]
        public string Token { get; set; }
    }
}