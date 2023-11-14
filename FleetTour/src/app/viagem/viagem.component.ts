import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css'],
})
export class ViagemComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }

  public onibusList: any;
  public passageirosList: any;

  valor = new FormControl('',
    [Validators.required]);

  observacao = new FormControl('',
    []);

  destino = new FormControl('',
    [Validators.required]);

  origem = new FormControl('',
    [Validators.required]);
  
  km = new FormControl('',
    []);
    
  passageiro = new FormControl('',
    []);

  onibus = new FormControl('',
    [Validators.required]);


  ngOnInit(): void {
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
  }

  
  salvar() {

    const idPassageiro = Number(this.passageiro.value);
    const idFuncionario = 1;
    
    const payload = {
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

    const url = 'https://www.fleettour.com.br/viagens';
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
      
      this.http.post<any>(url, payload, { headers, observe: 'response' }).subscribe(response => {
      if (response.status === 201) {
        this.router.navigate(['/indexViagem']);
      }
      else {
        console.log("dados inválidos!");
      }
    });
  }

}
