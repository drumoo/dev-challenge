using MultiSearch.Models;

namespace MultiSearch.Services
{
    public class MaterialsService
    {
        public static MaterialsModel[] FilterArray(List<MaterialsModel> listMaterials, String key)
        {

            List<MaterialsModel> listAux = new List<MaterialsModel>();


            foreach (MaterialsModel item in listMaterials)
            {

                if (key != null)
                {
                    if (item.MaterialID.ToLower().Contains(key.ToLower()) || item.MaterialName.ToLower().Contains(key.ToLower()))
                    {
                        listAux.Add(item);

                    }
                }   

            }

            return listAux.ToArray();


        }
    }
}
