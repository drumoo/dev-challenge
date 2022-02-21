using MultiSearch.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MultiSearch.Services;

namespace MultiSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalesOrdersController : ControllerBase
    {
        [HttpGet]
        [Route("{key}")]
        public SalesOrdersModel[] Get(string key)
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\sales_orders.json");

            List<SalesOrdersModel> listJson = JsonConvert.DeserializeObject<List<SalesOrdersModel>>(json);

            return SalesOrdersService.FilterArray(listJson, key);
        }

        [HttpGet]
        [Route("")]
        public SalesOrdersModel[] GetAll()
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\sales_orders.json");

            List<SalesOrdersModel> listJson = JsonConvert.DeserializeObject<List<SalesOrdersModel>>(json);

            return listJson.ToArray();
        }

    }
}