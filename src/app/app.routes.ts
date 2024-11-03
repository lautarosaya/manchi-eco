import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./config/config.page').then((m) => m.ConfigPage),
  },
  {
    path: 'ingreso',
    loadComponent: () =>
      import('./ingreso/ingreso.page').then((m) => m.IngresoPage),
  },
];
