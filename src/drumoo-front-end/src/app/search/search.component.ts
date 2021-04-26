import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
formulario:FormGroup;

  equipments$: Equipments[]=[];
  materials$: Materials[]=[];
  purchase_orders$: Purchase_orders[]=[];
  sales_orders$: Sales_orders[]=[];
  workforce$: Workforce[]=[];


  constructor(private service: SearchService) {
    this.formulario= new FormGroup({
      search:new FormControl('',[Validators.required])
    })
  }


  ngOnInit(): void {}



  searchProducts() {
 let value=this.formulario.get('search')?.value

this.service.listEquipments(value).subscribe(data => this.equipments$=[...data]);

this.service.listMatrials(value).subscribe(data => this.materials$ = [...data]);

this.service.listPurchase_orders(value).subscribe(data => this.purchase_orders$= [...data]);

this.service.listSales_orders(value).subscribe(data => this.sales_orders$ = [...data]);

this.service.listWorforce(value).subscribe(data => this.workforce$ = [...data]);

this.formulario.reset()

}

}

