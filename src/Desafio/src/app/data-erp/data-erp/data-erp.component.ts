import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Equipments } from '../model/equipments';
import { Materials } from '../model/materials';
import { PurchaseOrders } from '../model/purchase-orders';
import { SalesOrders } from '../model/sales-orders';
import { Workforce } from '../model/workforce';
import { EquipmentsService } from './../services/equipments.service';
import { MaterialsService } from './../services/materials.service';
import { PurchaseOrdersService } from './../services/purchase-orders.service';
import { SalesOrdersService } from './../services/sales-orders.service';
import { WorkforceService } from './../services/workforce.service';

@Component({
  selector: 'app-data-erp',
  templateUrl: './data-erp.component.html',
  styleUrls: ['./data-erp.component.css'],
})
export class DataErpComponent implements OnInit {

  // DataSources
  equipments$: Observable<Equipments[]>;
  materials$: Observable<Materials[]>;
  purchase_orders$: Observable<PurchaseOrders[]>;
  sales_orders$: Observable<SalesOrders[]>;
  workforce$: Observable<Workforce[]>;

  // Exibição das Tabelas
  displayedColumnsSalesOrders = ['SalesOrderID', 'MaterialName', 'Quantity'];
  displayedColumnsEquipments = ['EquipmentID', 'EquipmentName'];
  displayedColumnsPurchaseOrders = ['PurchaseOrderID', 'MaterialName', 'Quantity'];
  displayedColumnsMaterials = ['MaterialID', 'MaterialName'];
  displayedColumnsWorkforce = ['WorkforceID', 'Name'];

  // Construtor
  constructor(
    private equipmentsService: EquipmentsService,
    private materialsService: MaterialsService,
    private purchaseOrdersService: PurchaseOrdersService,
    private salesOrdersService: SalesOrdersService,
    private workforcesService: WorkforceService
  ) {
    this.equipments$ = new Observable<Equipments[]>;
    this.materials$ = new Observable<Materials[]>;
    this.purchase_orders$ = new Observable<PurchaseOrders[]>;
    this.sales_orders$ = new Observable<SalesOrders[]>;
    this.workforce$ = new Observable<Workforce[]>;
  }

  ngOnInit(): void {}

  onSearch() {
    // Variáveis
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const resultados = document.getElementById('resultados');

    // Exibe os resultados
    if(resultados != null) {
      resultados.classList.add("exibir");
    }


    // Faz a chamada da API pelo Service e busca pelo valor inserido na barra de pesquisa
    this.equipments$ = this.equipmentsService.findByName(searchBar.value)
                       .pipe(
                        catchError(() => {
                          return of([])
                        })
                       );

    this.materials$ = this.materialsService.findByName(searchBar.value)
                       .pipe(
                        catchError(() => {
                          return of([])
                        })
                       );

    this.purchase_orders$ = this.purchaseOrdersService.findByName(searchBar.value)
                       .pipe(
                        catchError(() => {
                          return of([])
                        })
                       );

    this.sales_orders$ = this.salesOrdersService.findByName(searchBar.value)
                       .pipe(
                        catchError(() => {
                          return of([])
                        })
                       );

    this.workforce$ = this.workforcesService.findByName(searchBar.value)
                       .pipe(
                        catchError(() => {
                          return of([])
                        })
                       );
  }

}

