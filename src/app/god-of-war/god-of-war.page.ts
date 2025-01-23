import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-god-of-war',
  standalone: true,
  templateUrl: './god-of-war.page.html',
  styleUrls: ['./god-of-war.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class GodOfWarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
