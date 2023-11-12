import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminModel } from './model/admin.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public dados: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const url = 'https://www.fleettour.com.br/usuarios';

    const headers = { 'Authorization': 'Bearer ' + token }
    this.http.get<any>(url, { headers,}).subscribe(response => {
      this.dados = response;

    });
  }
}
