import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-red-dead-redemption',
  standalone: true,
  templateUrl: './red-dead-redemption.page.html',
  styleUrls: ['./red-dead-redemption.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RedDeadRedemptionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
