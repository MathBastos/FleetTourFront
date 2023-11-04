import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroClienteModel } from './model/cadastro-cliente.model';
import { CadastroClienteService } from './service/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  constructor(private cadastroClienteService: CadastroClienteService) { }

  nome = new FormControl('',
    [Validators.required]);

  cpf = new FormControl('',
    [Validators.required]);

  dt_nascimento = new FormControl('',
    [Validators.required]);

  telefone = new FormControl('',
    [Validators.required]);

  rg = new FormControl('',
    [Validators.required]);

  email = new FormControl('',
    [Validators.required]);
  
  orgaoEmissor = new FormControl('',
    [Validators.required]);

  cep = new FormControl('',
    [Validators.required]);
  rua = new FormControl('',
    [Validators.required]);
  bairro = new FormControl('',
    [Validators.required]);
  numero = new FormControl('',
    [Validators.required]);
  complemento = new FormControl('',
    [Validators.required]);
  estado = new FormControl('',
    [Validators.required]);
  cidade = new FormControl('',
    [Validators.required]);
  pais = new FormControl('',
    [Validators.required]);

  salvar() {
    console.log(this.nome.value);
    console.log(this.cpf.value);
    console.log(this.dt_nascimento.value);
    console.log(this.telefone.value);


    let cliente = new CadastroClienteModel();
    cliente.nome = this.nome.value?.toString();
    cliente.cpf = this.cpf.value?.toString();
    cliente.rg = this.rg.value?.toString();
    cliente.email = this.email.value?.toString();
    cliente.orgaoEmissor = this.orgaoEmissor.value?.toString();
    cliente.dt_nascimento = this.dt_nascimento.value?.toString();
    cliente.telefone = this.telefone.value?.toString();
    
    cliente.cep = this.cep.value?.toString();
    cliente.rua = this.rua.value?.toString();
    cliente.bairro = this.bairro.value?.toString();
    cliente.numero = this.numero.value?.toString();
    cliente.complemento = this.complemento.value?.toString();
    cliente.estado = this.estado.value?.toString();
    cliente.cidade = this.cidade.value?.toString();
    cliente.pais = this.pais.value?.toString();

    this.cadastroClienteService.salvar(cliente);
  }

}
