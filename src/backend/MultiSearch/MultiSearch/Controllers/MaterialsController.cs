using MultiSearch.Models;
using MultiSearch.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MultiSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaterialsController : ControllerBase
    {
        [HttpGet]
        [Route("{key}")]
        public MaterialsModel[] Get(string key)
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\materials.json");

            List<MaterialsModel> listJson = JsonConvert.DeserializeObject<List<MaterialsModel>>(json);

            return MaterialsService.FilterArray(listJson, key);
        }
        
        [HttpGet]
        [Route("")]
        public MaterialsModel[] GetAll()
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\materials.json");

            List<MaterialsModel> listJson = JsonConvert.DeserializeObject<List<MaterialsModel>>(json);

            return listJson.ToArray();
        }
    }
}