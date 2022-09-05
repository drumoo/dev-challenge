import { Materials } from './../model/materials';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  private readonly API = '/api/Material/';


  constructor(private httpClient: HttpClient) { }

  findByName(name: string) {
    return this.httpClient.get<Materials[]>(this.API+name);
  }
}

