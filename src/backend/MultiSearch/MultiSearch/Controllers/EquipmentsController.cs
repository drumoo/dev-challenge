using MultiSearch.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MultiSearch.Services;

namespace MultiSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EquipmentsController : ControllerBase
    {
        [HttpGet]
        [Route("{key}")]
        public EquipmentsModel[] Get(string key)
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\equipments.json");

            List<EquipmentsModel> listJson = JsonConvert.DeserializeObject<List<EquipmentsModel>>(json);

            return EquipmentssService.FilterArray(listJson, key);
        }

        [HttpGet]
        [Route("")]
        public EquipmentsModel[] GetAll()
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\equipments.json");

            List<EquipmentsModel> listJson = JsonConvert.DeserializeObject<List<EquipmentsModel>>(json);

            return listJson.ToArray();
        }

    }
}