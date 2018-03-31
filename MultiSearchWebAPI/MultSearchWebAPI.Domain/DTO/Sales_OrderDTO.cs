using System;
using System.Collections.Generic;
using System.Text;

namespace MultSearchWebAPI.Domain.DTO
{
    public class Sales_OrderDTO
    {
      public int SalesOrderID { get; set; }
      public string MaterialName { get; set; }
      public string Quantity { get; set; }
    }
}
