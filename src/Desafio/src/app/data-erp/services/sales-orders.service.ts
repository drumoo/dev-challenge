import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { SalesOrders } from '../model/sales-orders';

@Injectable({
  providedIn: 'root'
})
export class SalesOrdersService {

  private readonly API = '/api/SaleOrder/';


  constructor(private httpClient: HttpClient) { }

  findByName(name: string) {
    return this.httpClient.get<SalesOrders[]>(this.API+name);
  }
}
