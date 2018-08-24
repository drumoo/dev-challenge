using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Challenge.Models
{
    public class Purchase_Order
    {
        public int PurchaseOrderID { set; get; }
        public string DeliveryDate { set; get; }
        public string Supplier { set; get; }
        public string MaterialID { set; get; }
        public string MaterialName { set; get; }
        public int Quantity { set; get; }
        public int TotalCost { set; get; }
    }
}