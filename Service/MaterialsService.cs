using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vitor_Challenge_Dev.Models;

namespace Vitor_Challenge_Dev.Service
{
    public class MaterialsService
    {

        public static MaterialsModel[] ConstrutorArray(List<MaterialsModel> listaJson, String parametro) {

            List<MaterialsModel> listaMaterialAuxiliar = new List<MaterialsModel>();


            foreach (MaterialsModel materialParametro in listaJson)
            {

                if (parametro != null) {

                    if (materialParametro.MaterialName.Contains(parametro) || materialParametro.MaterialID.Contains(parametro))
                    {
                        listaMaterialAuxiliar.Add(materialParametro);


                    }
                }
               


            }

            return listaMaterialAuxiliar.ToArray();

        }

    }
}
