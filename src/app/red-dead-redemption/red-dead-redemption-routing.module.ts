import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedDeadRedemptionPage } from './red-dead-redemption.page';

const routes: Routes = [
  {
    path: '',
    component: RedDeadRedemptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedDeadRedemptionPageRoutingModule {}
