import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uncharted',
  standalone: true,
  templateUrl: './uncharted.page.html',
  styleUrls: ['./uncharted.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UnchartedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
