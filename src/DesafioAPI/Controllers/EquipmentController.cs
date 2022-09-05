using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json;

namespace DesafioDrumooAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {

        // API de Retorno por Nome
        [HttpGet("{EquipmentName}")]
        public async Task<ActionResult<List<Equipment>>> Get(string EquipmentName)
        {
            // Recebe o caminho do JSON
            using (StreamReader r = new StreamReader("data/equipments.json"))

            {
                // Cria uma lista compatível com o tipo
                List<Equipment> equipments = new List<Equipment>();

                // Lê o JSON com as informações e grava na lista
                string json = r.ReadToEnd();
                equipments = JsonSerializer.Deserialize<List<Equipment>>(json);

                // Filtra a lista pelo nome recebido e retorna a lista filtrada
                var equipmentsRetorno = equipments
                    .FindAll(x => x.EquipmentName
                    .Contains(EquipmentName, System.StringComparison.CurrentCultureIgnoreCase));
                if (equipmentsRetorno.Count == 0)
                    return BadRequest("Não foi encontrado nenhum objeto com esse nome.");
                return Ok(equipmentsRetorno);
            }
        }
        

    }
}
