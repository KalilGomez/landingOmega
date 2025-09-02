// src/app/services/scroll-spy.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  // Observable para la sección activa
  private activeSection = new BehaviorSubject<string>('home');
  public activeSection$: Observable<string> = this.activeSection.asObservable();

  // Secciones disponibles en tu landing
  private sections: string[] = ['home', 'productos', 'acerca-de', 'servicios', 'contacto'];

  constructor() {}

  /**
   * Actualiza la sección activa
   */
  updateActiveSection(sectionId: string): void {
    if (this.sections.includes(sectionId)) {
      this.activeSection.next(sectionId);
    }
  }

  /**
   * Obtiene la sección activa actual
   */
  getCurrentActiveSection(): string {
    return this.activeSection.value;
  }

  /**
   * Hace scroll suave hacia una sección específica
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Obtener la altura del navbar para el offset
      const navbar = document.querySelector('app-navbar');
      const navbarHeight = navbar ? navbar.clientHeight : 80;
      
      // Calcular posición final
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      // Scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Actualizar sección activa inmediatamente
      this.updateActiveSection(sectionId);
    }
  }

  /**
   * Detecta automáticamente qué sección está visible
   */
  detectActiveSection(): void {
    // Obtener altura del navbar para el offset
    const navbar = document.querySelector('app-navbar');
    const navbarHeight = navbar ? navbar.clientHeight : 80;
    
    // Posición actual del scroll + offset del navbar
    const scrollPosition = window.pageYOffset + navbarHeight + 50;

    // Buscar la sección activa
    for (let i = 0; i < this.sections.length; i++) {
      const sectionId = this.sections[i];
      const element = document.getElementById(sectionId);
      
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        const offsetBottom = offsetTop + offsetHeight;

        // Si estamos en esta sección
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.updateActiveSection(sectionId);
          break;
        }
        
        // Si estamos en la última sección y hemos pasado todas las anteriores
        if (i === this.sections.length - 1 && scrollPosition >= offsetTop) {
          this.updateActiveSection(sectionId);
        }
      }
    }
  }

  /**
   * Obtiene todas las secciones disponibles
   */
  getAllSections(): string[] {
    return [...this.sections];
  }

  /**
   * Scroll al inicio de la página
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.updateActiveSection('home');
  }

  /**
   * Verifica si una sección existe
   */
  sectionExists(sectionId: string): boolean {
    return this.sections.includes(sectionId) && !!document.getElementById(sectionId);
  }
}