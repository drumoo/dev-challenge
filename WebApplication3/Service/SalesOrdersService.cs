using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vitor_Challenge_Dev.Models;

namespace Vitor_Challenge_Dev.Service
{
    public class SalesOrdersService
    {


        public static SalesOrdersModel[] ConstrutorArray(List<SalesOrdersModel> listaJson, String parametro) {


            List<SalesOrdersModel> listaSOAuxiliar = new List<SalesOrdersModel>();


            foreach (SalesOrdersModel soParametro in listaJson)
            {
                if (parametro != null) {
                    if (soParametro.DeliveryDate.Contains(parametro) || soParametro.Customer.Contains(parametro) || soParametro.MaterialID.Contains(parametro) || soParametro.MaterialName.Contains(parametro))
                    {
                        listaSOAuxiliar.Add(soParametro);


                    }
                }

            


            }

            return listaSOAuxiliar.ToArray();
        }
    }
}
