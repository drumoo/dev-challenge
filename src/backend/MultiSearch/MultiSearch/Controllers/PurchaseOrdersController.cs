using MultiSearch.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MultiSearch.Services;

namespace MultiSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PurchaseOrdersController : ControllerBase
    {
        [HttpGet]
        [Route("{key}")]
        public PurchaseOrdersModel[] Get(string key)
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\purchase_orders.json");

            List<PurchaseOrdersModel> listJson = JsonConvert.DeserializeObject<List<PurchaseOrdersModel>>(json);

            return PurchaseOrdersService.FilterArray(listJson, key);
        }

        [HttpGet]
        [Route("")]
        public PurchaseOrdersModel[] GetAll()
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\purchase_orders.json");

            List<PurchaseOrdersModel> listJson = JsonConvert.DeserializeObject<List<PurchaseOrdersModel>>(json);

            return listJson.ToArray();
        }

    }
}