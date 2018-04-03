using MultSearchWebAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.DTO
{
    public class SearchDTO
    {
      public List<Equipment> Equipments { get; set; }
      public List<Material> Materials { get; set; }
      public List<Purchase_Order> Purchase_Orders { get; set; }
      public List<Sales_Order> Sales_Orders { get; set; }
      public List<Workforce> Workforces { get; set; }
  }
}
