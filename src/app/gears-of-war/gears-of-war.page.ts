import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gears-of-war',
  standalone: true, // Asegúrate de incluir esto
  templateUrl: './gears-of-war.page.html',
  styleUrls: ['./gears-of-war.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class GearsOfWarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
