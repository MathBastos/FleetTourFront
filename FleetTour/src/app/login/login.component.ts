import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginModel } from './model/login.model';
import { LoginService } from './service/login.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router:Router) { }

  login = new FormControl('',
    [Validators.required]);

  senha = new FormControl('',
    [Validators.required]);


  entrar() {

    const payload = {login: this.login.value, senha: this.senha.value};

    console.log("payload -> \nlogin: ", payload.login, "\nsenha: ", payload.senha);

    const url = 'https://www.fleettour.com.br/rest/auth/login';

    this.http.post<LoginModel>(url, payload, { observe: 'response' }).subscribe(response => {
      if (response.status === 200) {
        console.log("response -> ", response);
        console.log("response.body.token -> ", response.body?.token);
        localStorage.setItem('token', response.body?.token ?? '');
        this.router.navigate(['/index']);
      }
      else {
        alert("Usuário ou senha inválidos!");
      }
    });
  }
}
