import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EditarClienteModel } from './model/editar-cliente.model';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  public dados: any;

  constructor(private http: HttpClient, private router: Router) { }

  public nome = new FormControl('',
    [Validators.required]);

  public cpf = new FormControl('',
    [Validators.required]);

  public telefone = new FormControl('',
    [Validators.required]);

  public rg = new FormControl('',
    [Validators.required]);

  public email = new FormControl('',
    [Validators.required]);

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('idCliente');
    const url = 'https://www.fleettour.com.br/passageiros/' + id;

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.dados = response;

      this.nome.setValue(this.dados.nome);
      this.cpf.setValue(this.dados.cpf);
      this.telefone.setValue(this.dados.telefone);
      this.rg.setValue(this.dados.rg);
      this.email.setValue(this.dados.email);
    });
  }

  salvar() {

    const id = localStorage.getItem('idCliente');
    const payload = {
      idPassageiro: id,
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
    
    const url = 'https://www.fleettour.com.br/passageiros/'+ id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.put<any>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/indexCliente']);
      }
      else {
        console.log("dados inválidos!");
      }
    });
  }
}
