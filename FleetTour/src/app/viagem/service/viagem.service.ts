import { Injectable } from '@angular/core';
import { ViagemModel } from '../model/viagem.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {


  viagens: ViagemModel[] = [];

  constructor(private http: HttpClient) { }

  salvar(viagem: ViagemModel) {
    this.viagens.push(viagem);

    console.log(this.viagens);
  }
}
