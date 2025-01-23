import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperMarioBrosPageRoutingModule } from './super-mario-bros-routing.module';

import { SuperMarioBrosPage } from './super-mario-bros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperMarioBrosPageRoutingModule,
    SuperMarioBrosPage
  ]
})
export class SuperMarioBrosPageModule {}
