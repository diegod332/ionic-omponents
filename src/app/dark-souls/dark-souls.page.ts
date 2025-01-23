import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dark-souls',
  standalone: true,
  templateUrl: './dark-souls.page.html',
  styleUrls: ['./dark-souls.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DarkSoulsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
