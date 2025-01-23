import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cod',
  standalone: true,
  templateUrl: './cod.page.html',
  styleUrls: ['./cod.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CodPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
