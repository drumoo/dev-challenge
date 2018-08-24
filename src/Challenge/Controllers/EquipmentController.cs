using Challenge.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Challenge.Controllers
{
    public class EquipmentController : ApiController
    {
        public Equipment[] Get()
        {
            var collection = JsonConvert.DeserializeObject<List<Equipment>>(File.ReadAllText("C:/Users/Arthur/source/repos/src/Challenge/data/equipments.json")); //Deserializando json em objetos do tipo correto
            List<Equipment> aux_collection = new List<Equipment>(); //Lista auxiliar para armazenar a quantia certa do array para retornar.
            for (int i = 0; i < collection.Count; i++)
            {
                if (collection[i].EquipmentID.Contains(Search.GetInstance().query) || collection[i].EquipmentName.Contains(Search.GetInstance().query)) //Condições de busca
                {
                    aux_collection.Add(collection[i]);
                }
            }

            Equipment[] equipmentArray = new Equipment[aux_collection.Count]; //Criando array de valores para retornar
            for (int i = 0; i < aux_collection.Count; i++)
            {
                equipmentArray[i] = aux_collection[i]; //Atribuindo todos os valores da lista auxiliar ao array de retorno.
            }

            return equipmentArray; //Retornando json
        }
    }
}
