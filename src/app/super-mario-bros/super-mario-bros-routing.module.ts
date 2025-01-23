import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperMarioBrosPage } from './super-mario-bros.page';

const routes: Routes = [
  {
    path: '',
    component: SuperMarioBrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperMarioBrosPageRoutingModule {}
