import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: LoginModel[] = [];

  constructor(private http: HttpClient) { }

  entrar(login: LoginModel) {

    const payload = {login: login.login, senha: login.senha};

    console.log("payload -> \nlogin: ", payload.login, "\nsenha: ", payload.senha);

    const url = 'https://www.fleettour.com.br/rest/auth/login';

    console.log("url -> ", url);

    console.log(this.login);
  }
}
