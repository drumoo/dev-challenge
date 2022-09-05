import { Equipments } from './../model/equipments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { DataErpComponent } from '../data-erp/data-erp.component';

@Injectable({
  providedIn: 'root'
})

export class EquipmentsService {

  private readonly API = '/api/Equipment/';

  constructor(private httpClient: HttpClient) { }

  findByName(name: string) {
    return this.httpClient.get<Equipments[]>(this.API+name);
  }
}

