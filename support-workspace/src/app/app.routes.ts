import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then((m) => m.Dashboard),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];