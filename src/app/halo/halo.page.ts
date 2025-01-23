import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halo',
  standalone: true,
  templateUrl: './halo.page.html',
  styleUrls: ['./halo.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HaloPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
