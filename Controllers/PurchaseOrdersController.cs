using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using Vitor_Challenge_Dev.Models;
using Vitor_Challenge_Dev.Service;

namespace Vitor_Challenge_Dev.Controllers
{
    [ApiController]
    [Route("api/[controller]/{paremetro?}")]
    public class PurchaseOrdersController : ControllerBase
    {


        [EnableCors("AnotherPolicy")]
        [HttpGet()]
        public PurchaseOrdersModel[] Retorno([FromQuery(Name = "parametro")] string parametro)
        {


            List<PurchaseOrdersModel> listaJson = JsonConvert.DeserializeObject<List<PurchaseOrdersModel>>(System.IO.File.ReadAllText("C:/Users/vitor/source/repos/WebApplication3/data/purchase_orders.json"));



            return PurchaseOrdersService.construtorArray(listaJson, parametro);
        }
    }
}
