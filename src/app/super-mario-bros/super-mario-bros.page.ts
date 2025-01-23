import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-super-mario-bros',
  standalone: true,
  templateUrl: './super-mario-bros.page.html',
  styleUrls: ['./super-mario-bros.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SuperMarioBrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
