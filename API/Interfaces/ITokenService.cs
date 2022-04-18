using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken (User user);
        Task<bool> UserExists(string username);
    }
}