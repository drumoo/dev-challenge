import { SearchResultBase } from './search-result-base';

export class Sales_Order extends SearchResultBase {
  id(): string {
    return String(this.SalesOrderID);
  }
  name(): string {
    return this.MaterialName;
  }
  quantity(): number {
    return this.Quantity;
  }
    SalesOrderID: number;
    MaterialName: string;
    Quantity: number;    
  }