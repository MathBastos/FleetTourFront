import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: LoginModel[] = [];

  constructor(private http: HttpClient) { }

  entrar(login: LoginModel) {

    var senha = "{bcrypt}";

    if (login.senha) 
    senha += bcrypt.hashSync(login.senha, "$2b$06$C6UzMDM.H6dfI/f/IKxGhu");

    const payload = {login: login.login, senha: senha};

    console.log("payload -> \nlogin: ", payload.login, "\nsenha: ", payload.senha);

    const url = 'https://www.fleettour.com.br/rest/auth/login';

    console.log("url -> ", url);

    this.http.post(url, payload, { observe: 'response' }).subscribe(response => {
      console.log(response.status); // Status code
      console.log(response.headers.get('Content-Type')); // Specific header
      console.log(response.body); // Response body
    });

    this.login.push(login);

    console.log(this.login);
  }
}
