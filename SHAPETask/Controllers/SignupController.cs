using Microsoft.AspNetCore.Mvc;
using SHAPETask.Models;
using System.Collections.Generic;
using System.Linq;

namespace SHAPETask.Controllers
{
    [Route("api/signup")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        [HttpPost]
        public IActionResult Register([FromBody] SignupViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState
                    .Where(x => x.Value.Errors.Count > 0)
                    .ToDictionary(
                        kvp => kvp.Key,
                        kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()
                    );

                return BadRequest(new { success = false, errors });
            }

            return Ok(new { success = true, message = "Signup successful!" });
        }
    }
}
