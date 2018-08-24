using Challenge.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Challenge.Controllers
{
    public class MaterialController : ApiController
    {
        public Material[] Get()
        {
            var collection = JsonConvert.DeserializeObject<List<Material>>(File.ReadAllText("C:/Users/Arthur/source/repos/src/Challenge/data/materials.json")); //Deserializando json em objetos do tipo correto
            List<Material> aux_collection = new List<Material>(); //Lista auxiliar para armazenar a quantia certa do array para retornar.
            for (int i = 0; i < collection.Count; i++)
            {
                if (collection[i].MaterialID.Contains(Search.GetInstance().query) || collection[i].MaterialName.Contains(Search.GetInstance().query)) //Condições de busca
                {
                    aux_collection.Add(collection[i]);
                }
            }

            Material[] materialArray = new Material[aux_collection.Count]; //Criando array de valores para retornar
            for (int i = 0; i < aux_collection.Count; i++)
            {
                materialArray[i] = aux_collection[i]; //Atribuindo todos os valores da lista auxiliar ao array de retorno.
            }

            return materialArray; //Retornando json
        }
    }
}
