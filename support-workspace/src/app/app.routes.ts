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

      {
        path: 'requests',
        loadComponent: () =>
          import('./features/requests/requests')
            .then((m) => m.Requests),
      },

      {
        path: 'requests/create',
        loadComponent: () =>
          import('./features/create-request/create-request')
            .then((m) => m.CreateRequest),
      },

      {
        path: 'requests/:id',
        loadComponent: () =>
          import('./features/request-details/request-details')
            .then((m) => m.RequestDetails),
      },

    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];