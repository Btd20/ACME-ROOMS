using Microsoft.AspNetCore.Identity;

namespace Project2.Models
{
    public class ApplicationUser : IdentityUser
    {

        public int numRol { get; set; }
    }
}