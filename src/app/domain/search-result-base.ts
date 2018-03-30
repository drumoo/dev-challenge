import { ISearchResult } from "./isearch-result";

export abstract  class SearchResultBase implements ISearchResult{
    
    id(): string {
      return "";
    }
    name(): string {
      return "";
    }
    quantity(): number {
      return 0;
    }
  }