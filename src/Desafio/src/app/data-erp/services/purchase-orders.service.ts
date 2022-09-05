import { PurchaseOrders } from './../model/purchase-orders';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrdersService {

  private readonly API = '/api/PurchaseOrder/';


  constructor(private httpClient: HttpClient) { }

  findByName(name: string) {
    return this.httpClient.get<PurchaseOrders[]>(this.API+name);
  }
}
