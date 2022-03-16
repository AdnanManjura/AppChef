using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserDto
    {
        public string Username { get; set; }
        [Required]
        public string Token { get; set; }
    }
}