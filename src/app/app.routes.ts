import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
