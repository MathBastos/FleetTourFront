import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  public dados: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const url = 'https://www.fleettour.com.br/passageiros';

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.dados = response;
      console.log(this.dados);
    });
    
  }
  editar(id: any) {
    localStorage.setItem('idCliente', id);
    this.router.navigate(['/editarCliente']);
  }

  excluir(id: any) {
    const url = 'https://www.fleettour.com.br/passageiros/' + id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.delete(url, { headers, }).subscribe(response => {
      window.location.reload();
    });
  }

}

