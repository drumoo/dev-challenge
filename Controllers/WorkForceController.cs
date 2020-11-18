using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using Vitor_Challenge_Dev.Models;
using Vitor_Challenge_Dev.Service;

namespace WebApplication3.Controllers
{
    [ApiController]
    [Route("api/[controller]/{paremetro?}")]
    public class WorkForceController : ControllerBase
    {


        [EnableCors("AnotherPolicy")]
        [HttpGet()]
        public WorkForceModel[] Retorno([FromQuery(Name = "parametro")] string parametro)
        {


           List<WorkForceModel> listaJson = JsonConvert.DeserializeObject<List<WorkForceModel>>(System.IO.File.ReadAllText("C:/Users/vitor/source/repos/WebApplication3/data/workforce.json"));



            return WorkForceService.ConstrutorArray(listaJson, parametro);
        }
    }
}
