import { Workforce } from './../model/workforce';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkforceService {

  private readonly API = '/api/Workforce/';


  constructor(private httpClient: HttpClient) { }

  findByName(name: string) {
    return this.httpClient.get<Workforce[]>(this.API+name);
  }
}
