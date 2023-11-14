import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-viagem',
  templateUrl: './editar-viagem.component.html',
  styleUrls: ['./editar-viagem.component.css']
})
export class EditarViagemComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  public onibusList: any;
  public passageirosList: any;
  public dados: any;

  public valor = new FormControl('',
    [Validators.required]);

  public observacao = new FormControl('',
    []);

  public destino = new FormControl('',
    [Validators.required]);

  public origem = new FormControl('',
    [Validators.required]);

  public km = new FormControl('',
    []);

  public passageiro = new FormControl('',
    [Validators.required]);

  public onibus = new FormControl('',
    [Validators.required]);


  ngOnInit(): void {
    const id = localStorage.getItem('idViagem')
    const token = localStorage.getItem('token');
    const url = 'https://www.fleettour.com.br/veiculos';

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.onibusList = response;
    });

    const url2 = 'https://www.fleettour.com.br/passageiros';
    this.http.get<any>(url2, { headers, }).subscribe(response => {
      this.passageirosList = response;
    });

    const url3 = 'https://www.fleettour.com.br/viagens/' + id;
    this.http.get<any>(url3, { headers, }).subscribe(response => {
      this.dados = response;

      this.valor.setValue(this.dados.valor);
      this.observacao.setValue(this.dados.observacao);
      this.destino.setValue(this.dados.destino);
      this.origem.setValue(this.dados.origem);
      this.km.setValue(this.dados.km);
    });
  }

  salvar() {

    const id = Number(localStorage.getItem('idViagem'));


    const idPassageiro = Number(this.passageiro.value);
    const idFuncionario = 1;
    
    const payload = {
      idViagem: id,
      valor: Number(this.valor.value),
      observacao: this.observacao.value?.toString(),
      destino: this.destino.value?.toString(),
      origem: this.origem.value?.toString(),
      km: Number(this.km.value),
      passageiros: [
        idPassageiro]
      ,
      veiculo: {
        idVeiculo: Number(this.onibus.value)
      },
      funcionarios: [
        idFuncionario]
      ,
      empresa: {
        idEmpresa: 1
      },
      contratante:{
        idContratante: 2
      }
    };

    const url = 'https://www.fleettour.com.br/viagens/' + id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.put<any>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/indexViagem']);
      }
      else {
        console.log("dados inválidos!");
      }
    });
  }

}
