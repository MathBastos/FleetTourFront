import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})

export class OnibusComponent implements OnInit {
  public dados: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const url = 'https://www.fleettour.com.br/veiculos';

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers, }).subscribe(response => {
      this.dados = response; 
    });
  }
  editar(id: any) {
    localStorage.setItem('idOnibus', id);
    this.router.navigate(['/editarOnibus']);
  }

  excluir(id: any){
    const url = 'https://www.fleettour.com.br/veiculos/'+ id;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    this.http.delete(url, { headers,}).subscribe(response => {
      window.location.reload();
    });
  }
}