using MultiSearch.Models;

namespace MultiSearch.Services
{
    public class EquipmentssService
    {
        public static EquipmentsModel[] FilterArray(List<EquipmentsModel> listEquipments, String key)
        {

            List<EquipmentsModel> listAux = new List<EquipmentsModel>();


            foreach (EquipmentsModel item in listEquipments)
            {

                if (key != null)
                {
                    if (item.EquipmentID.ToLower().Contains(key.ToLower()) || item.EquipmentName.ToLower().Contains(key.ToLower()))
                    {
                        listAux.Add(item);

                    }
                }

            }

            return listAux.ToArray();


        }
    }
}
