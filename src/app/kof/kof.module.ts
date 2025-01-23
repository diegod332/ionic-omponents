import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KofPageRoutingModule } from './kof-routing.module';

import { KofPage } from './kof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KofPageRoutingModule,
    KofPage
  ]
})
export class KofPageModule {}
