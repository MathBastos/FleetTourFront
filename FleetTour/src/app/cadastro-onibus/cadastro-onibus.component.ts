import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroOnibusModel } from './model/cadastro-onibus.model';
import { CadastroOnibusService } from './service/cadastro-onibus.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-onibus',
  templateUrl: './cadastro-onibus.component.html',
  styleUrls: ['./cadastro-onibus.component.css']
})

export class CadastroOnibusComponent {

  constructor(private cadastroOnibusService: CadastroOnibusService, private http: HttpClient, private router: Router) { }

  placa = new FormControl('',
    [Validators.required]);

  renavam = new FormControl('',
    [Validators.required]);

  ano = new FormControl('',
    [Validators.required]);

  quilometragem = new FormControl('',
    [Validators.required]);

  codFrota = new FormControl('',
    [Validators.required]);

  capacidade = new FormControl('',
    [Validators.required]);

  salvar() {
    const payload = {
      placa: this.placa.value?.toString(),
      renavam: this.renavam.value?.toString(),
      ano: this.ano.value?.toString(),
      quilometragem: this.quilometragem.value?.toString(),
      codFrota: this.codFrota.value?.toString(),
      capacidade: this.capacidade.value?.toString()
    };
    const url = 'https://www.fleettour.com.br/veiculos';

    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    
    this.http.post<CadastroOnibusModel>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 201) {
        this.router.navigate(['/indexOnibus']);
      }
      else {
        console.log("dados inválidos!");
      }
    });
  }
}
