import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipments } from './dataInterfaces/equipments';
import { Materials } from './dataInterfaces/materials';
import { Purchase_orders } from './dataInterfaces/purchase_orders';
import { Sales_orders } from './dataInterfaces/sales_orders';
import { Workforce } from './dataInterfaces/workforce';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API = {
    url1:'http://localhost:3000/equipments',
    url2:'http://localhost:3000/materials',
    url3:'http://localhost:3000/purchase_ordens',
    url4:'http://localhost:3000/sales_orders',
    url5:'http://localhost:3000/workforce'
  }
  constructor(private http: HttpClient) { }

listEquipments() {
  return this.http.get<Equipments[]>(this.API.url1);

}
listMatrials() {
  return this.http.get<Materials[]>(this.API.url2);
}

listPurchase_orders() {
  return this.http.get<Purchase_orders[]>(this.API.url3);
}

listSales_orders() {
  return this.http.get<Sales_orders[]>(this.API.url4);

}

listWorforce() {
  return this.http.get<Workforce[]>(this.API.url5);
}




}
