import { Routes } from '@angular/router';
import { AutenticacaoComponent } from './layout/autenticacao/autenticacao.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './pages/autenticacao/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { MeusEstabelecimentosComponent } from './pages/dashboard/meus-estabelecimentos/meus-estabelecimentos.component';

export const routes: Routes = [
    {
        component: AutenticacaoComponent,
        path: '',
        children: [
            {
                component: LoginComponent,
                path: 'login'
            }
        ]
    },
    {
        component: DashboardComponent,
        path: 'dashboard',
        children: [
            {
                component: MeusEstabelecimentosComponent,
                path: 'meus-estabelecimentos'
            }
        ]
    },
    {
        redirectTo: "login",
        path: '',
        pathMatch: 'full',
    },
    {
        component: PaginaNaoEncontradaComponent,
        path: '**',
        pathMatch: 'full'
    }
];
