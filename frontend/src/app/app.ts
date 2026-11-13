import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';
import { BottomNav } from './layout/bottom-nav/bottom-nav';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BottomNav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    // Tras cada navegación (no la carga inicial) el foco va al título de la página nueva,
    // así el lector de pantalla la anuncia y el teclado sigue desde ahí.
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        skip(1),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.focusPageTitle());
  }

  /** Espera a que la vista (y sus datos) rendericen un <h1> y le pasa el foco. */
  private focusPageTitle(tries = 20) {
    setTimeout(() => {
      const h1 = document.querySelector<HTMLElement>('#contenido h1');
      if (!h1 && tries > 0) return this.focusPageTitle(tries - 1);
      const target = h1 ?? document.getElementById('contenido');
      if (!target) return;
      if (target === h1) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 100);
  }

  /**
   * Lleva el foco al contenido principal. No se usa la navegación por "#":
   * con <base href="/">, "#contenido" apunta a "/#contenido" y recargaría el inicio.
   */
  protected skipToContent(event: Event) {
    event.preventDefault();
    const main = document.getElementById('contenido');
    main?.focus();
    main?.scrollIntoView();
  }
}
