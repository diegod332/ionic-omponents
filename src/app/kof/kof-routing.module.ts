import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KofPage } from './kof.page';

const routes: Routes = [
  {
    path: '',
    component: KofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KofPageRoutingModule {}
