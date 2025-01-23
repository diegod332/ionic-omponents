import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = 'Diegod@gmail.com';
  password?: string;

  constructor(private navCtrl: NavController) {
    // this.password = '';
  }

  ngOnInit() {}

  login(form: NgForm) {
    // Obtener valores del formulario
    console.log(form.value);

    // Validar formulario
    console.log('valid', form.valid);
    if (form.invalid) {
      console.log('Todos los campos son requeridos');
      return;
    }

    // Si usuario=admin y password=admin
    if (this.email === 'admin' && this.password === 'admin') {
      console.log('Login correcto');
      this.navCtrl.navigateForward('/inicio');
    } else {
      console.log('Login incorrecto');
    }
  }
}