using MultiSearch.Models;
using MultiSearch.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MultiSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkforceController : ControllerBase
    {
        [HttpGet]
        [Route("{key}")]
        public WorkforceModel[] Get(string key)
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\workforce.json");

            List<WorkforceModel> listJson = JsonConvert.DeserializeObject<List<WorkforceModel>>(json);

            return WorkforceService.FilterArray(listJson, key);
        }
        
        [HttpGet]
        [Route("")]
        public WorkforceModel[] GetAll()
        {
            string json = System.IO.File.ReadAllText(@"C:\seed\data\workforce.json");

            List<WorkforceModel> listJson = JsonConvert.DeserializeObject<List<WorkforceModel>>(json);

            return listJson.ToArray();
        }
    }
}