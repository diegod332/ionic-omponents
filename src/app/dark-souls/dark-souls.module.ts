import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkSoulsPageRoutingModule } from './dark-souls-routing.module';

import { DarkSoulsPage } from './dark-souls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkSoulsPageRoutingModule,
    DarkSoulsPage
  ]
})
export class DarkSoulsPageModule {}
