import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
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
}