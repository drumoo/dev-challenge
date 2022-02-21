using MultiSearch.Models;

namespace MultiSearch.Services
{
    public class SalesOrdersService
    {
        public static SalesOrdersModel[] FilterArray(List<SalesOrdersModel> listSalesOrders, String key)
        {

            List<SalesOrdersModel> listAux = new List<SalesOrdersModel>();


            foreach (SalesOrdersModel item in listSalesOrders)
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
