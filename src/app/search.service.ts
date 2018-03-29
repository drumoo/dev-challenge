import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  getResult(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

        return this.http.get('/data/equipments.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          .do(data => console.log('All: ' + data))
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
