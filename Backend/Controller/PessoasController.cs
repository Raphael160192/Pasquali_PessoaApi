using Microsoft.AspNetCore.Mvc;
using PessoasAPI.Models;
using PessoasAPI.Services;

namespace PessoasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly PessoaService _pessoaService;

        public PessoasController()
        {
            _pessoaService = new PessoaService();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var pessoas = _pessoaService.GetAll();
            return Ok(pessoas);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pessoa pessoa)
        {
            _pessoaService.Add(pessoa);
            return CreatedAtAction(nameof(Get), new { id = pessoa.Id }, pessoa);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deleted = _pessoaService.Delete(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
