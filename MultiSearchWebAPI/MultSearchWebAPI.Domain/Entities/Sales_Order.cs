using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.Entities
{
    public class Sales_Order
    {
      public int SalesOrderID { get; set; }
      public string MaterialName { get; set; }
      public string Quantity { get; set; }
    }
}
