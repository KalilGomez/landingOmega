// src/app/shared/navbar/navbar.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyService } from '../services/scroll-spy.service'; // Ajustar ruta según tu estructura
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeSection: string = 'home';
  private subscription: Subscription = new Subscription();

  // Enlaces del menú (con IDs que coinciden con los del service)
  menuItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'productos', label: 'Productos', icon: '👓' },
    { id: 'acerca-de', label: 'Acerca de', icon: 'ℹ️' },
    { id: 'servicios', label: 'Servicios', icon: '🔧' },
    { id: 'contacto', label: 'Contacto', icon: '📞' }
  ];

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngOnInit(): void {
    // Suscribirse a cambios de sección activa
    this.subscription.add(
      this.scrollSpyService.activeSection$.subscribe(
        (section: string) => {
          this.activeSection = section;
        }
      )
    );
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones
    this.subscription.unsubscribe();
  }

  /**
   * Navegar a una sección específica
   */
  navigateToSection(sectionId: string): void {
    console.log(`Navegando a sección: ${sectionId}`); // Debug
    this.scrollSpyService.scrollToSection(sectionId);
  }

  /**
   * Verificar si una sección está activa
   */
  isActiveSection(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  /**
   * Scroll al inicio
   */
  scrollToTop(): void {
    this.scrollSpyService.scrollToTop();
  }
}