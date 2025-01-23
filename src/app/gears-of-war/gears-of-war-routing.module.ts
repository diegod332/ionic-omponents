import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearsOfWarPage } from './gears-of-war.page';

const routes: Routes = [
  {
    path: '',
    component: GearsOfWarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearsOfWarPageRoutingModule {}
