using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vitor_Challenge_Dev.Models
{
    public class PurchaseOrdersModel
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
