using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace DesafioDrumooAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseOrderController : ControllerBase
    {
        // API de Retorno por Nome
        [HttpGet("{MaterialName}")]
        public async Task<ActionResult<List<PurchaseOrder>>> Get(string MaterialName)
        {
            // Recebe o caminho do JSON
            using (StreamReader r = new StreamReader("data/purchase_orders.json"))
            {
                // Cria uma lista compatível com o tipo
                List<PurchaseOrder> materials = new List<PurchaseOrder>();

                // Lê o JSON com as informações e grava na lista
                string json = r.ReadToEnd();
                materials = JsonSerializer.Deserialize<List<PurchaseOrder>>(json);

                // Filtra a lista pelo nome recebido e retorna a lista filtrada
                var materialsRetorno = materials
                    .FindAll(x => x.MaterialName
                    .Contains(MaterialName, System.StringComparison.CurrentCultureIgnoreCase));
                if (materialsRetorno.Count == 0)
                    return BadRequest("Não foi encontrado nenhum objeto com esse nome.");
                return Ok(materialsRetorno);
            }
        }
    }
}
