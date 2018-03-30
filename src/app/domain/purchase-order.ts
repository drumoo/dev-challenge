import { SearchResultBase } from './search-result-base';

export class Purchase_Order extends SearchResultBase {
  quantity(): number {
    return this.Quantity;
  }
  id(): string {
    return String(this.PurchaseOrderID);
  }
  name(): string {
    return this.MaterialName;
  }
    PurchaseOrderID: number;
    MaterialName: string;
    Quantity: number;    
  }