using MultiSearch.Models;

namespace MultiSearch.Services
{
    public class WorkforceService
    {
        public static WorkforceModel[] FilterArray(List<WorkforceModel> listWorkforce, String key)
        {

            List<WorkforceModel> listAux = new List<WorkforceModel>();


            foreach (WorkforceModel item in listWorkforce)
            {

                if (key != null)
                {
                    if (item.WorkforceID.ToLower().Contains(key.ToLower()) ||
                        item.Name.ToLower().Contains(key.ToLower()) ||
                        item.Shift.ToLower().Contains(key.ToLower()))
                    {
                        listAux.Add(item);

                    }
                }   

            }

            return listAux.ToArray();


        }
    }
}
