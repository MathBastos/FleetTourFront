import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-viagem',
  templateUrl: './listar-viagem.component.html',
  styleUrls: ['./listar-viagem.component.css']
})
export class ListarViagemComponent implements OnInit{
  public dados: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const url = 'https://www.fleettour.com.br/viagens';

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.dados = response;
    });
  }
  editar(id: any) {
    localStorage.setItem('idViagem', id);
    this.router.navigate(['/editarViagem']);
  }

  excluir(id: any) {
    const url = 'https://www.fleettour.com.br/viagens/' + id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.delete(url, { headers, }).subscribe(response => {
      window.location.reload();
    });
  }

}
