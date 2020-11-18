using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vitor_Challenge_Dev.Models;

namespace Vitor_Challenge_Dev.Service
{
    public class WorkForceService
    {

        public static WorkForceModel[] ConstrutorArray(List<WorkForceModel> listaJson, String parametro)
        {

           
            List<WorkForceModel> listaWorkForceAuxiliar = new List<WorkForceModel>();

            if (parametro != null) {
                foreach (WorkForceModel workForceParametro in listaJson)
                {

                    if (workForceParametro.Name.Contains(parametro) || workForceParametro.Shift.Contains(parametro))
                    {
                        listaWorkForceAuxiliar.Add(workForceParametro);


                    }


                }
            }
          

            return listaWorkForceAuxiliar.ToArray();


        }

    }
}