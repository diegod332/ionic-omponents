import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true, // Asegúrate de incluir esto
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PokemonPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
