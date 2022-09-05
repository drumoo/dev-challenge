import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DataErpRoutingModule } from './data-erp-routing.module';
import { DataErpComponent } from './data-erp/data-erp.component';



@NgModule({
  declarations: [
    DataErpComponent
  ],
  imports: [
    CommonModule,
    DataErpRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class DataErpModule { }
