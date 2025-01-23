import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GearsOfWarPageRoutingModule } from './gears-of-war-routing.module';
import { GearsOfWarPage } from './gears-of-war.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GearsOfWarPageRoutingModule,
    GearsOfWarPage  // Ya no es necesario declararlo, solo importarlo
  ]
})
export class GearsOfWarPageModule {}
