using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.DTO
{
    public class Purchase_OrderDTO
    {
      public string PurchaseOrderID { get; set; }
      public string MaterialName { get; set; }
      public string Quantity { get; set; }
    }
}
