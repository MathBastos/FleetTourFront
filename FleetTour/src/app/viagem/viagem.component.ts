import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViagemModel } from './model/viagem.model';
import { ViagemService } from './service/viagem.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent {
  constructor(private viagemService: ViagemService) { }

  dataViagem = new FormControl('',
    [Validators.required]);

  horaSaida = new FormControl('',
    [Validators.required]);

  horaChegada = new FormControl('',
    [Validators.required]);

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

  nfe = new FormControl('',
    []);

  valorNfe = new FormControl('',
    []);
    
  passageiros = new FormControl('',
    []);

  veiculo = new FormControl('',
    [Validators.required, Validators.minLength(5)]);




  salvar() {
    console.log(this.dataViagem.value);
    console.log(this.horaSaida.value);
    console.log(this.horaChegada.value);
    console.log(this.valor.value);
    console.log(this.observacao.value);
    console.log(this.destino.value);
    console.log(this.origem.value);
    console.log(this.km.value);
    console.log(this.nfe.value);
    console.log(this.valorNfe.value);
    console.log(this.passageiros.value);
    console.log(this.veiculo.value);



    let viagem = new ViagemModel();
    viagem.dataViagem = this.dataViagem.value?.toString();
    viagem.horaSaida = this.horaSaida.value?.toString();
    viagem.horaChegada = this.horaChegada.value?.toString();
    viagem.valor = this.valor.value?.toString();
    viagem.observacao = this.observacao.value?.toString();
    viagem.destino = this.destino.value?.toString();
    viagem.origem = this.origem.value?.toString();
    viagem.km = this.km.value?.toString();
    viagem.nfe = this.nfe.value?.toString();
    viagem.valorNfe = this.valorNfe.value?.toString();
    viagem.passageiros = this.passageiros.value?.toString();
    viagem.veiculo = this.veiculo.value?.toString();



    this.viagemService.salvar(viagem);
  }

}
