import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = 'Diegod@gmail.com';
  password?: string ;


  constructor() {
    // this.password = '';
   }
  

  ngOnInit() {
  

}
  login(form: NgForm) {
   //Si usuario=admin y password=admin
   //Entonces console.log('Login correcto')
    //Sino console.log('Login incorrecto')
    
    //obtener valores del formulario
    console.log(form.value);

    //validar formulario
    console.log('valid' , form.valid);
    //Si el formulario es inválido, entonces console.log('Todos los campos son requeridos')
    //return

    if (form.invalid) {
      console.log('Todos los campos son requeridos');
      return;
    }
    if (this.email === 'admin' && this.password === 'admin') {
      console.log('Login correcto');
    }
    else {
      console.log('Login incorrecto');
    }


  }
}