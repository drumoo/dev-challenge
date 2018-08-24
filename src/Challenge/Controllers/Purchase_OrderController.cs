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
    public class Purchase_OrderController : ApiController
    {
        public Purchase_Order[] Get()
        {
            var collection = JsonConvert.DeserializeObject<List<Purchase_Order>>(File.ReadAllText("C:/Users/Arthur/source/repos/src/Challenge/data/purchase_orders.json")); //Deserializando json em objetos do tipo correto
            List<Purchase_Order> aux_collection = new List<Purchase_Order>(); //Lista auxiliar para armazenar a quantia certa do array para retornar.

            for (int i = 0; i < collection.Count; i++)
            {
                if (collection[i].MaterialName.Contains(Search.GetInstance().query)) //Condições de busca
                {
                    aux_collection.Add(collection[i]);
                }
            }

            Purchase_Order[] purchase_orderArray = new Purchase_Order[aux_collection.Count]; //Criando array de valores para retornar

            for (int i = 0; i < aux_collection.Count; i++)
            {
                purchase_orderArray[i] = aux_collection[i]; //Atribuindo todos os valores da lista auxiliar ao array de retorno.
            }

            return purchase_orderArray; //Retornando json
        }
    }
}
