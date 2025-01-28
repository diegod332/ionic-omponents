import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  standalone: true,
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  register(form: NgForm) {
    console.log(form.value);

    console.log('valid', form.valid);
    if (form.invalid) {
      console.log('Todos los campos son requeridos');
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

   
    this.navCtrl.navigateForward('/inicio');
  }
}