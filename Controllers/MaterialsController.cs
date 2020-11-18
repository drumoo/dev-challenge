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
        public class MaterialsController : ControllerBase
        {


        [EnableCors("AnotherPolicy")]
        [HttpGet()]
            public MaterialsModel[] Retorno([FromQuery(Name = "parametro")] string parametro)
            {


                List<MaterialsModel> listaJson = JsonConvert.DeserializeObject<List<MaterialsModel>>(System.IO.File.ReadAllText("C:/Users/vitor/source/repos/WebApplication3/data/materials.json"));



                return MaterialsService.ConstrutorArray(listaJson, parametro);
            }
        

    }
}
