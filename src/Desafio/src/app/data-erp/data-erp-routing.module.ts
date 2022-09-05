import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataErpComponent } from './data-erp/data-erp.component';

const routes: Routes = [
  { path: '', component: DataErpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataErpRoutingModule { }
