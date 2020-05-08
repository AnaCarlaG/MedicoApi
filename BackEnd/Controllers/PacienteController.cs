using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PacienteController : ControllerBase
  {
    [HttpPost]
    public ActionResult cadastrar([FromServices] DataContext context, [FromBody] Paciente paciente)
    {
      if (ModelState.IsValid)
      {
        context.Add(paciente);
        context.SaveChanges();
        return Ok(true);
      }
      return StatusCode(29, "false");
    }
  }
}
