import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { OnibusComponent } from './onibus/onibus.component';
import { ClienteComponent } from './cliente/cliente.component';
import { IndexOnibusComponent } from './index-onibus/index-onibus.component';
import { IndexClienteComponent } from './index-cliente/index-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroOnibusComponent } from './cadastro-onibus/cadastro-onibus.component';
import { ViagemComponent } from './viagem/viagem.component';
import { AdminComponent } from './admin/admin.component';
import { EditarOnibusComponent } from './editar-onibus/editar-onibus.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { IndexViagemComponent } from './index-viagem/index-viagem.component';
import { ListarViagemComponent } from './listar-viagem/listar-viagem.component';



const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent },
      { path: 'login', component: LoginComponent }, 
      { path: 'index', component: IndexComponent }, 
      { path: 'onibus', component: OnibusComponent }, 
      { path: 'cliente', component: ClienteComponent }, 
      { path: 'indexOnibus', component: IndexOnibusComponent}, 
      { path: 'indexCliente', component: IndexClienteComponent},
      { path: 'cadastroCliente', component: CadastroClienteComponent},
      { path: 'cadastroOnibus', component: CadastroOnibusComponent },
      { path: 'viagem', component: ViagemComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'editarOnibus', component: EditarOnibusComponent},
      { path: 'editarCliente', component: EditarClienteComponent},
      { path: 'indexViagem', component: IndexViagemComponent },
      { path: 'listarViagem', component: ListarViagemComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
