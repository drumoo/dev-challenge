import { SearchResultBase } from './search-result-base';

export class Equipment extends SearchResultBase {
  constructor() {
    super();
  }
  quantity(): number {
    return 0;
  }
  id(): string {
    return this.EquipmentID;
  }
  name(): string {
    return this.EquipmentName;
  }
  EquipmentID: string;
  EquipmentName: string;
}