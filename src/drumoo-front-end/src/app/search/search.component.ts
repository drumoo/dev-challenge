import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable} from 'rxjs';
import { Equipments } from '../dataInterfaces/equipments';
import { Materials } from '../dataInterfaces/materials';
import { Purchase_orders } from '../dataInterfaces/purchase_orders';
import { Sales_orders } from '../dataInterfaces/sales_orders';
import { Workforce } from '../dataInterfaces/workforce';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

queryfield = new FormControl();




  equipments$!: Observable<Equipments[]>;
  materials$!: Observable<Materials[]>;
  purchase_orders$!: Observable<Purchase_orders[]>;
  sales_orders$!: Observable<Sales_orders[]>;
  workforce$!: Observable<Workforce[]>;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  this.equipments$ = this.service.listEquipments()
  this.materials$ = this.service.listMatrials()
  this.purchase_orders$ = this.service.listPurchase_orders()
  this.sales_orders$ = this.service.listSales_orders()
  this.workforce$ = this.service.listWorforce()

  }

}
