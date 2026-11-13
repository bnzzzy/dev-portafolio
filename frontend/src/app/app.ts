import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
