import { SearchResultBase } from './search-result-base';

export class Material extends SearchResultBase {
  id(): string {
    return this.MaterialID;
  }
  name(): string {
    return this.MaterialName;
  }
  quantity(): number {
    return 0;
  }
  MaterialID: string;
  MaterialName: string;
}