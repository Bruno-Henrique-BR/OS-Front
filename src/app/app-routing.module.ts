import { OsReadComponent } from './components/os/os-read/os-read.component';
import {  OsEditComponent } from './components/os/os-edit/os-edit.component';
import { OsCreateComponent } from './components/os/os-create/os-create.component';
import { OsListComponent } from './components/os/os-list/os-list.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { NavComponent } from './components/template/nav/nav.component';
import { AuthGuard } from './guard/auth.guard';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children:
      [
        { path: 'home', component: HomeComponent },

        { path: 'tecnicos', component: TecnicoListComponent },
        { path: 'tecnicos/create', component: TecnicoCreateComponent },
        { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
        { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

        { path: 'clientes', component: ClienteListComponent },
        { path: 'clientes/create', component: ClienteCreateComponent },
        { path: 'clientes/update/:id', component: ClienteUpdateComponent },
        { path: 'clientes/delete/:id', component: ClienteDeleteComponent },

        { path: 'os', component: OsListComponent },
        { path: 'os/create', component: OsCreateComponent },
        { path: 'os/update/:id', component: OsEditComponent },
        { path: 'os/:id', component: OsReadComponent },

      
      ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
