using MultiSearch.Models;

namespace MultiSearch.Services
{
    public class PurchaseOrdersService
    {
        public static PurchaseOrdersModel[] FilterArray(List<PurchaseOrdersModel> listPurchaseOrders, String key)
        {

            List<PurchaseOrdersModel> listAux = new List<PurchaseOrdersModel>();


            foreach (PurchaseOrdersModel item in listPurchaseOrders)
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
