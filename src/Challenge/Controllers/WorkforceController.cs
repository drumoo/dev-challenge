using Challenge.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Challenge.Controllers
{
    public class WorkforceController : ApiController
    {
        public Workforce[] Get()
        {
            var collection = JsonConvert.DeserializeObject<List<Workforce>>(File.ReadAllText("C:/Users/Arthur/source/repos/src/Challenge/data/workforce.json")); //Deserializando json em objetos do tipo correto
            List<Workforce> aux_collection = new List<Workforce>(); //Lista auxiliar para armazenar a quantia certa do array para retornar.
            for (int i = 0; i < collection.Count; i++)
            {
                if (collection[i].Name.Contains(Search.GetInstance().query) || collection[i].Shift.Contains(Search.GetInstance().query)) //Condições de busca
                { 
                    aux_collection.Add(collection[i]);
                }
            }

            Workforce[] workforceArray = new Workforce[aux_collection.Count]; //Criando array de valores para retornar
            for (int i = 0; i < aux_collection.Count; i++)
            {
                workforceArray[i] = aux_collection[i]; //Atribuindo todos os valores da lista auxiliar ao array de retorno.
            }
            
            return workforceArray; //Retornando json
        }
    }
}
