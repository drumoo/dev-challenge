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
  
  constructor(private http: Http) {}

  private dataSource = new BehaviorSubject<any>([]);
  currentDataSource = this.dataSource.asObservable();

  getData(): Observable<SearchDTO>  {
        return this.http.get('/data/data.json')
           .map((res:Response) => <SearchDTO>res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
