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
    public class SalesOrderController : ControllerBase
    {


        [EnableCors("AnotherPolicy")]
        [HttpGet()]
        public SalesOrdersModel[] Retorno([FromQuery(Name = "parametro")] string parametro)
        {


            List<SalesOrdersModel> listaJson = JsonConvert.DeserializeObject<List<SalesOrdersModel>>(System.IO.File.ReadAllText("C:/Users/vitor/source/repos/WebApplication3/data/sales_orders.json"));



            return SalesOrdersService.ConstrutorArray(listaJson, parametro);
        }
    }
}
