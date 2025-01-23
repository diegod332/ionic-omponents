import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kof',
  standalone: true,
  templateUrl: './kof.page.html',
  styleUrls: ['./kof.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class KofPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
