import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./page/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'productos',
        loadComponent: () => import('./page/products/products.component').then(c => c.ProductsComponent)
    },
    {
        path: 'acerca-de',
        loadComponent: () => import('./page/about-us/about-us.component').then(c => c.AboutUsComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./page/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: 'servicios',
        loadComponent: () => import('./page/services/services.component').then(c => c.ServicesComponent)
    }
];
