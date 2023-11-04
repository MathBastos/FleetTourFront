import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginModel } from './model/login.model';
import { LoginService } from './service/login.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  login = new FormControl('',
    [Validators.required]);

  senha = new FormControl('',
    [Validators.required]);


  entrar() {
    console.log(this.login.value);
    console.log(this.senha.value);

    let login = new LoginModel();
    login.login = this.login.value?.toString();
    login.senha = this.senha.value?.toString();

    this.loginService.entrar(login);
  }
}
