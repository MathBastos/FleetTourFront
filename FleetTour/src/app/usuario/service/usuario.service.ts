import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: UsuarioModel[] = [];

  constructor(private http: HttpClient) { }

  salvar(usuario: UsuarioModel) {
    this.usuarios.push(usuario);

    console.log(this.usuarios);
  }
}
