import { SearchResultBase } from './search-result-base';

export class Workforce extends SearchResultBase{
  id(): string {
    return this.WorkforceID;
  }
  name(): string {
    return this.Name;
  }
  quantity(): number {
    return 0;
  }
    WorkforceID: string;
    Name: string;
  }