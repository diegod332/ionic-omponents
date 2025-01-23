import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule], // Agregar RouterModule aquí
})
export class HomePage {
  constructor() {}

  ngOnInit() {
    console.log('Hola mundo');
  }
}
