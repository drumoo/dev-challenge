import { Equipment } from "./equipment";
import { Material } from "./material";
import { Purchase_Order } from "./purchase-order";
import { Sales_Order } from "./sales-order";
import { Workforce } from "./workforce";

export class SearchDTO {
  constructor(){
    this.Equipments = new Array<Equipment>();
    this.Materials = new Array<Material>();
    this.Purchase_Orders = new Array<Purchase_Order>();
    this.Sales_Orders = new Array<Sales_Order>();
    this.Workforces = new Array<Workforce>();
  }
    Equipments: Array<Equipment>;
    Materials: Array<Material>;
    Purchase_Orders: Array<Purchase_Order>;
    Sales_Orders: Array<Sales_Order>;
    Workforces: Array<Workforce>;
  }