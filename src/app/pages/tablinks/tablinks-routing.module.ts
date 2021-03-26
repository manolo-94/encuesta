import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'formrender',
        loadChildren: () => import('../formrender/formrender.module').then( m => m.FormrenderPageModule)
      },
      {
        path: 'formbuilder',
        loadChildren: () => import('../formbuilder/formbuilder.module').then( m => m.FormbuilderPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'encuestas',
        loadChildren: () => import('../encuestas/encuestas.module').then( m => m.EncuestasPageModule)
      },
      {
        path: 'promovidos',
        loadChildren: () => import('../promovidos/promovidos.module').then( m => m.PromovidosPageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
