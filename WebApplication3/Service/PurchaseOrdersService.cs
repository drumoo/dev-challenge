using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vitor_Challenge_Dev.Models;

namespace Vitor_Challenge_Dev.Service
{
    public class PurchaseOrdersService
    {

        public static PurchaseOrdersModel[] construtorArray(List<PurchaseOrdersModel> listaEquipments, String parametro)
        {

            List<PurchaseOrdersModel> listaPOAuxiliar = new List<PurchaseOrdersModel>();


            foreach (PurchaseOrdersModel poParemetro in listaEquipments)
            {
                if (parametro !=null) {

                    if (poParemetro.DeliveryDate.Contains(parametro) || poParemetro.Supplier.Contains(parametro) || poParemetro.MaterialID.Contains(parametro) || poParemetro.MaterialName.Contains(parametro))
                    {
                        listaPOAuxiliar.Add(poParemetro);


                    }
                }
              


            }

            return listaPOAuxiliar.ToArray();


        }
    }
}
