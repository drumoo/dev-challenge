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
    public class EquipmentsController : ControllerBase
    {


        [EnableCors("AnotherPolicy")]
        [HttpGet()]
        public EquipmentsModel[] Retorno([FromQuery(Name = "parametro")] string parametro)
        {


            List<EquipmentsModel> listaJson = JsonConvert.DeserializeObject<List<EquipmentsModel>>(System.IO.File.ReadAllText("C:/Users/vitor/source/repos/WebApplication3/data/equipments.json"));



            return EquipmentsService.ConstrutorArray(listaJson, parametro);
        }
    }
}
