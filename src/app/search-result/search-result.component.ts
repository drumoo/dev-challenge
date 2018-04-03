import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../domain/equipment';
import { Material } from '../domain/material';
import { Sales_Order } from '../domain/sales-order';
import { SearchDTO } from '../domain/searchDTO';
import { SearchResultBase } from '../domain/search-result-base';
import { Purchase_Order } from '../domain/purchase-order';
import { Workforce } from '../domain/workforce';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SeachResultComponent implements OnInit {
  private _data: Array<SearchResultBase> = new Array<SearchResultBase>();
  @Input() title: string;
  @Input() className: string;

  @Input()
  set data(data: Array<SearchResultBase>) {
    console.log("search.data: " + this.className + JSON.stringify(data));

    if (data != null) {
      this._data = new Array<SearchResultBase>();
      data.forEach(element => {
        // Usando reflection não está funcionando, mas deveria funcionar
        //var equipment = window(data[0].constructor.name);
        let item: SearchResultBase = this.getInstance(this.className);
        Object.assign(item, element);
        this._data.push(item);
      });
    }

  }
  constructor() {

  }

  private getInstance(className: string): any {
    switch (className) {
      case "Equipment":
        return new Equipment();
      case "Material":
        return new Material();
      case "Purchase_Order":
        return new Purchase_Order();
      case "Sales_Order":
        return new Sales_Order();
      case "Workforce":
        return new Workforce();
      default:
        return null;
    }
  }

  ngOnInit() {
  }

}