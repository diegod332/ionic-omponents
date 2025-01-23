import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedDeadRedemptionPageRoutingModule } from './red-dead-redemption-routing.module';

import { RedDeadRedemptionPage } from './red-dead-redemption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedDeadRedemptionPageRoutingModule,
    RedDeadRedemptionPage
  ]
})
export class RedDeadRedemptionPageModule {}
