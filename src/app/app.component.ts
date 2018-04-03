import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { SearchService } from './search.service';
import { SearchDTO } from './domain/searchDTO';
import { Equipment } from './domain/equipment';
import { Material } from './domain/material';
import { Sales_Order } from './domain/sales-order';
import { Workforce } from './domain/workforce';
import { Purchase_Order } from './domain/purchase-order';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  title = 'Mult-Search';
  text: string = "";
  total: number;
  result: Observable<SearchDTO>;
  data: SearchDTO = new SearchDTO();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.search();
  }

  private search() {
    this.searchService.getData(this.text).subscribe(res => {
      Object.assign(this.data, res);
      this.total = this.data.Equipments.length + this.data.Materials.length + this.data.Sales_Orders.length + this.data.Purchase_Orders.length + this.data.Workforces.length;

    });
  }
}
