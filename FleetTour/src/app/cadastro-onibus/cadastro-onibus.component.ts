import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroOnibusModel } from './model/cadastro-onibus.model';
import { CadastroOnibusService } from './service/cadastro-onibus.service';

@Component({
  selector: 'app-cadastro-onibus',
  templateUrl: './cadastro-onibus.component.html',
  styleUrls: ['./cadastro-onibus.component.css']
})

export class CadastroOnibusComponent {

  constructor(private cadastroOnibusService: CadastroOnibusService) { }

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

  taf = new FormControl('',
    [Validators.required]);

  refEstadual = new FormControl('',
    [Validators.required]);

  ultimaVistoria = new FormControl('',
    [Validators.required]);

  seguro = new FormControl('',
    [Validators.required]);

  licenciamentoAntt = new FormControl('',
    [Validators.required]);

  licenciamentoDer = new FormControl('',
    [Validators.required]);

  salvar() {
    console.log(this.placa.value);
    console.log(this.renavam.value);
    console.log(this.ano.value);
    console.log(this.quilometragem.value);
    console.log(this.codFrota.value);
    console.log(this.capacidade.value);
    console.log(this.taf.value);
    console.log(this.refEstadual.value);
    console.log(this.ultimaVistoria.value);
    console.log(this.seguro.value);
    console.log(this.licenciamentoAntt.value);
    console.log(this.licenciamentoDer.value);
    
    let onibus = new CadastroOnibusModel();
    onibus.placa = this.placa.value?.toString();
    onibus.renavam = this.renavam.value?.toString();
    onibus.ano = this.ano.value?.toString();
    onibus.quilometragem = this.quilometragem.value?.toString();
    onibus.codFrota = this.codFrota.value?.toString();
    onibus.capacidade = this.capacidade.value?.toString();
    onibus.taf = this.taf.value?.toString();
    onibus.refEstadual = this.refEstadual.value?.toString();
    onibus.ultimaVistoria = this.ultimaVistoria.value?.toString();
    onibus.seguro = this.seguro.value?.toString();
    onibus.licenciamentoAntt = this.licenciamentoAntt.value?.toString();
    onibus.licenciamentoDer = this.licenciamentoDer.value?.toString();

    this.cadastroOnibusService.salvar(onibus);
  }
}
