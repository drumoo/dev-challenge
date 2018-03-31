using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.DTO
{
    public class SearchDTO
    {
      public List<EquipmentDTO> Equipments { get; set; }
      public List<MaterialDTO> Materials { get; set; }
      public List<Purchase_OrderDTO> Purchase_Orders { get; set; }
      public List<Sales_OrderDTO> Sales_Orders { get; set; }
      public List<WorkforceDTO> Workforces { get; set; }
  }
}
