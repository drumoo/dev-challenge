using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Challenge.Models
{
    public class Sales_Order
    {
        public int SalesOrderID { set; get; }
        public string DeliveryDate { set; get; }
        public string Customer { set; get; }
        public string MaterialID { set; get; }
        public string MaterialName { set; get; }
        public int Quantity { set; get; }
        public int TotalValue { set; get; }
    }
}