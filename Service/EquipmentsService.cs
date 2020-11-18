using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vitor_Challenge_Dev.Models;

namespace Vitor_Challenge_Dev.Service
{
    public class EquipmentsService
    {
        public static EquipmentsModel[] ConstrutorArray(List<EquipmentsModel> listaEquipments,String parametro) {

            List<EquipmentsModel> listaEquipAuxiliar = new List<EquipmentsModel>();


            foreach (EquipmentsModel eqParametro in listaEquipments)
            {

                if (parametro != null) {


                    if (eqParametro.EquipmentID.Contains(parametro) || eqParametro.EquipmentName.Contains(parametro))
                    {
                        listaEquipAuxiliar.Add(eqParametro);


                    }
                }
              


            }

            return listaEquipAuxiliar.ToArray();

           
        }

    }
}
