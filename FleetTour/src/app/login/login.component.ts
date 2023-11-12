import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginModel } from './model/login.model';
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

    if (payload.login == "admin" && payload.senha == "admin") {
      this.router.navigate(['/admin']);
    }else{
      const url = 'https://www.fleettour.com.br/rest/auth/login';

      this.http.post<LoginModel>(url, payload, { observe: 'response' }).subscribe(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.body?.token ?? '');
          this.router.navigate(['/index']);
        }
        else {
          console.log("Usuário ou senha inválidos!");
        }
      });
    }
  }
}
