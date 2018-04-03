using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using MultSearchWebAPI.Domain;
using MultSearchWebAPI.Domain.DTO;
using Newtonsoft.Json;

namespace MultSearchWebAPI.Services
{
  public class SearchService : ISearchService
  {
    public SearchDTO Buscar(string text = "")
    {
      using (DataContext dataContext = new DataContext())
      {
        //var result = FindAllEntities(dataContext.Data, text);
        if (!string.IsNullOrEmpty(text))
        {
          dataContext.Database.Equipments = dataContext.Database.Equipments
            .Where(x => FindAllFields(x, text)).ToList();
          dataContext.Database.Materials = dataContext.Database.Materials
            .Where(x => ContainsIgnoreCase(x.MaterialID, text) || ContainsIgnoreCase(x.MaterialName, text)).ToList();
          dataContext.Database.Purchase_Orders = dataContext.Database.Purchase_Orders
            .Where(x => ContainsIgnoreCase(x.PurchaseOrderID, text) || ContainsIgnoreCase(x.MaterialName, text)).ToList();
          dataContext.Database.Sales_Orders = dataContext.Database.Sales_Orders
            .Where(x => ContainsIgnoreCase(x.SalesOrderID.ToString(), text) || ContainsIgnoreCase(x.MaterialName, text)).ToList();
          dataContext.Database.Workforces = dataContext.Database.Workforces
            .Where(x => ContainsIgnoreCase(x.WorkforceID, text) || ContainsIgnoreCase(x.Name, text)).ToList();
        }

        return dataContext.Database;
      }
    }
    
    private bool FindAllFields<T>(T entity, string text)
    {
      Type typeOfMyObject = entity.GetType();
      PropertyInfo[] properties = typeOfMyObject.GetProperties();
      return properties.Any(x => ContainsIgnoreCase(x.GetValue(entity).ToString(), text));
    }

    private bool ContainsIgnoreCase(string value, string text)
    {
      return value.IndexOf(text, StringComparison.OrdinalIgnoreCase) >= 0;
    }

  }
}
