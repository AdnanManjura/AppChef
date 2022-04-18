using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class UsersController : BaseApiController
    {
        private readonly IUserService _UserService;
        public UsersController(IUserService UserService)
        {
            _UserService = UserService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            return await _UserService.GetUsers();
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<AppUser>> GetUser(int userId)
        {
            if(userId < 1)
                return BadRequest();
            
            return await _UserService.GetUser(userId);
        }
    }
}