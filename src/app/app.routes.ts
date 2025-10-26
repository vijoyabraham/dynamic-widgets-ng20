import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home').then(m => m.Home)
},
{
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
}
,
{
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('../not-found/not-found').then(m => m.NotFound)
}

];
