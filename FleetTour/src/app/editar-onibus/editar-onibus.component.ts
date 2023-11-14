import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EditarOnibusModel } from './model/cadastro-onibus.model';

@Component({
  selector: 'app-editar-onibus',
  templateUrl: './editar-onibus.component.html',
  styleUrls: ['./editar-onibus.component.css']
})
export class EditarOnibusComponent implements OnInit {
  public dados: any;

  constructor(private http: HttpClient, private router: Router) { }

  public placa = new FormControl('',
    [Validators.required]);

  public renavam = new FormControl('',
    [Validators.required]);

  public ano = new FormControl('',
    [Validators.required]);

  public quilometragem = new FormControl('',
    [Validators.required]);

  public codFrota = new FormControl('',
    [Validators.required]);

  public capacidade = new FormControl('',
    [Validators.required]);


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('idOnibus');
    const url = 'https://www.fleettour.com.br/veiculos/' + id;

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.dados = response;
    
      this.placa.setValue(this.dados.placa);
      this.renavam.setValue(this.dados.renavam);
      this.ano.setValue(this.dados.ano);
      this.quilometragem.setValue(this.dados.quilometragem);
      this.codFrota.setValue(this.dados.codFrota);
      this.capacidade.setValue(this.dados.capacidade);
    });
  }

  salvar() {
    const id = localStorage.getItem('idOnibus');
    const payload = {
      idVeiculo: id,
      placa: this.placa.value?.toString(),
      renavam: this.renavam.value?.toString(),
      ano: this.ano.value?.toString(),
      quilometragem: this.quilometragem.value?.toString(),
      codFrota: this.codFrota.value?.toString(),
      capacidade: this.capacidade.value?.toString(),
      empresa: {
        idEmpresa: 1
      }
    };
    const url = 'https://www.fleettour.com.br/veiculos/' + id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    
    this.http.put<EditarOnibusModel>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/onibus']);
      }
      else {
        console.log(response);
        console.log("dados inválidos!");
      }
    });
  }
}