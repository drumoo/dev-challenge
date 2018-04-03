using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.Entities
{
    public class Purchase_Order
    {
      public string PurchaseOrderID { get; set; }
      public string MaterialName { get; set; }
      public string Quantity { get; set; }
    }
}
