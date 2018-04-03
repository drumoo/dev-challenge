import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from  'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { SearchDTO } from './domain/searchDTO';

@Injectable()
export class SearchService {
  private _apiURL: string = "http://localhost:58571";
  constructor(private http: Http) {}

  getData(text: string): Observable<SearchDTO>  {
        return this.http.get(this._apiURL + "/api/Search/" + text)
           .map((res:Response) => <SearchDTO>res.json())
          .catch((error:any) => Observable.throw(JSON.stringify(error.json()) + '.Server error.'));
  }
}
