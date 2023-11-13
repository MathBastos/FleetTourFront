import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroClienteModel } from './model/cadastro-cliente.model';
import { CadastroClienteService } from './service/cadastro-cliente.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  constructor(private cadastroClienteService: CadastroClienteService, private http: HttpClient, private router: Router) { }

  nome = new FormControl('',
    [Validators.required]);

  cpf = new FormControl('',
    [Validators.required]);

  telefone = new FormControl('',
    [Validators.required]);

  rg = new FormControl('',
    [Validators.required]);

  email = new FormControl('',
    [Validators.required]);
  

  salvar() {
    const payload = {
      nome: this.nome.value?.toString(),
      cpf: this.cpf.value?.toString(),
      rg: this.rg.value?.toString(),
      email: this.email.value?.toString(),
      telefone: this.telefone.value?.toString(),
      tipo_cliente: "Compras",
      empresa: {
        idEmpresa: 1
      }
    };
    const url = 'https://www.fleettour.com.br/passageiros';

    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.post<any>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 201) {
        this.router.navigate(['/indexCliente']);
        console.log("sucesso");
      }
      else {
        console.log("dados inválidos!");
      }
    });
  }

}
