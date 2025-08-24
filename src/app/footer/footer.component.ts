import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: 'facebook'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: 'instagram'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: 'twitter'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'linkedin'
    }
  ];

  quickLinks = [
    { name: 'Inicio', url: '#' },
    { name: 'Productos', url: '#' },
    { name: 'Servicios', url: '#' },
    { name: 'Nosotros', url: '#' },
    { name: 'Contacto', url: '#' }
  ];

  services = [
    { name: 'Examen Visual', url: '#' },
    { name: 'Anteojos Recetados', url: '#' },
    { name: 'Lentes de Contacto', url: '#' },
    { name: 'Anteojos de Sol', url: '#' },
    { name: 'Reparaciones', url: '#' }
  ];

  // footer.component.ts
scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}