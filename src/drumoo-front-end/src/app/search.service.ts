import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    url1:"http://localhost:3333/equipments",
    url2:"http://localhost:3333/materials",
    url3:"http://localhost:3333/purchase_orders",
    url4:"http://localhost:3333/sales_orders",
    url5:"http://localhost:3333/workforce"
  }
  constructor(private http: HttpClient) { }

listEquipments(value:any) {



let searchParams = new HttpParams();
searchParams = searchParams.append('EquipmentName',value)
return this.http.get<Equipments[]>(this.API.url1,{ params:searchParams });

}
listMatrials(value:any) {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('MaterialName',value)
  return this.http.get<Materials[]>(this.API.url2,{ params:searchParams });
}

listPurchase_orders(value:any) {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('MaterialName',value)
  return this.http.get<Purchase_orders[]>(this.API.url3,{ params:searchParams });

}

listSales_orders(value:any) {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('MaterialName',value)
  return this.http.get<Sales_orders[]>(this.API.url4,{ params:searchParams });

}

listWorforce(value:any) {

  let searchParams = new HttpParams();
  searchParams = searchParams.append('Name',value)
  return this.http.get<Workforce[]>(this.API.url5,{ params:searchParams });
    }
}
