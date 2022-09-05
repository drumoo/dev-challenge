using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace DesafioDrumooAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkforceController : ControllerBase
    {
        // API de Retorno por Nome
        [HttpGet("{Name}")]
        public async Task<ActionResult<List<Workforce>>> Get(string Name)
        {
            // Recebe o caminho do JSON
            using (StreamReader r = new StreamReader("data/workforce.json"))
            {
                // Cria uma lista compatível com o tipo
                List<Workforce> workforces = new List<Workforce>();

                // Lê o JSON com as informações e grava na lista
                string json = r.ReadToEnd();
                workforces = JsonSerializer.Deserialize<List<Workforce>>(json);

                // Filtra a lista pelo nome recebido e retorna a lista filtrada
                var workforcesRetorno = workforces
                    .FindAll(x => x.Name
                    .Contains(Name, System.StringComparison.CurrentCultureIgnoreCase));
                if (workforcesRetorno.Count == 0)
                    return BadRequest("Não foi encontrado resultados.");
                return Ok(workforcesRetorno);
            }
        }
    }
}
