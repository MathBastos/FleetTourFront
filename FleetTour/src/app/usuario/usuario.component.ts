import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  constructor(private usuarioService: UsuarioService, private http: HttpClient, private router: Router) {}

  nome = new FormControl('', 
    [Validators.required]);

  cpf = new FormControl('',
    [Validators.required]);

  dt_nascimento = new FormControl('',
    [Validators.required]);

  genero = new FormControl('',
    [Validators.required]);

  telefone = new FormControl('', 
    [Validators.required]);

  login = new FormControl('',
    [Validators.required, Validators.minLength(5)]);

  senha = new FormControl('', 
    [Validators.required,Validators.minLength(5)]);
  
  salvar() {
    console.log(this.nome.value);
    console.log(this.cpf.value);
    console.log(this.dt_nascimento.value);
    console.log(this.genero.value);
    console.log(this.telefone.value);
    console.log(this.login.value);
    console.log(this.senha.value);


    const payload = {
      nome: this.nome.value?.toString(),
      cpf: this.cpf.value?.toString(),
      dt_nascimento: this.dt_nascimento.value?.toString(),
      genero: this.genero.value?.toString(),
      telefone: this.telefone.value?.toString(),
      login: this.login.value?.toString(),
      senha: this.senha.value?.toString()
    };
    const url = 'https://www.fleettour.com.br/usuarios/registrar';

    this.http.post<UsuarioModel>(url, payload, { observe: 'response' }).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/login']);
      }
      else {
        console.log("dados inválidos!");
      }
    });

    // let usuario = new UsuarioModel();
    // usuario.nome = this.nome.value?.toString();
    // usuario.cpf = this.cpf.value?.toString();
    // usuario.dt_nascimento = this.dt_nascimento.value?.toString();
    // usuario.genero = this.genero.value?.toString();
    // usuario.telefone = this.telefone.value?.toString();
    // usuario.login = this.login.value?.toString();
    // usuario.senha = this.senha.value?.toString();

    // this.usuarioService.salvar(usuario);
  }

}
