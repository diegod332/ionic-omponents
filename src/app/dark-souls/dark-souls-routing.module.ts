import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkSoulsPage } from './dark-souls.page';

const routes: Routes = [
  {
    path: '',
    component: DarkSoulsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkSoulsPageRoutingModule {}
