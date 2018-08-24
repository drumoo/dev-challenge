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
    public class Sales_OrderController : ApiController
    {

        public Sales_Order[] Get()
        {
            var collection = JsonConvert.DeserializeObject<List<Sales_Order>>(File.ReadAllText("C:/Users/Arthur/source/repos/src/Challenge/data/sales_orders.json")); //Deserializando json em objetos do tipo correto
            List<Sales_Order> aux_collection = new List<Sales_Order>(); //Lista auxiliar para armazenar a quantia certa do array para retornar.
            for (int i = 0; i < collection.Count; i++)
            {
                if (collection[i].MaterialName.Contains(Search.GetInstance().query)) //Condições de busca
                {
                    aux_collection.Add(collection[i]);
                }
            }

            Sales_Order[] sales_orderArray = new Sales_Order[aux_collection.Count]; //Criando array de valores para retornar
            for (int i = 0; i < aux_collection.Count; i++)
            {
                sales_orderArray[i] = aux_collection[i]; //Atribuindo todos os valores da lista auxiliar ao array de retorno.
            }

            return sales_orderArray; //Retornando json
        }
    }
}
