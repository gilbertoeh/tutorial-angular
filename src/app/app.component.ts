import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <header class="header">
        <img src="assets/images/angular-banner.png" alt="Angular Banner" class="logo" />
        <h1>Bienvenido al Tutorial de "Esenciales" de Angular</h1>
      </header>

      <nav class="sidebar">
        <ul>
          <li routerLinkActive="active">
            <a routerLink="/que-es-angular">¿Qué es Angular?</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/justificacion">Justificación</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/instalacion">Instalación</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/primeros-pasos">Primeros Pasos</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/utilizacion">Utilización</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/funcionamiento">Funcionamiento</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/conclusiones">Conclusiones</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/recomendaciones">Recomendaciones</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/problemas-comunes">¿Cómo resolver problemas comunes?</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/recursos">Recursos</a>
          </li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <p>&copy; 2024 - Tutorial desarrollado por Gilberto Hernandez</p>
        <a href="https://github.com/gilbertoeh">Visita mi GitHub</a>
      </footer>
    </div>
  `,
  styles: [
    `
      /* Estilos generales */
      .container {
        display: grid;
        grid-template-areas:
          'header header'
          'sidebar content'
          'footer footer';
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
        font-family: Arial, sans-serif;
      }
      .header {
        grid-area: header;
        background:rgb(30, 22, 41);
        color: white;
        text-align: center;
        padding: 1rem;
      }
      .header .logo {
        max-width: 150px; /* Tamaño máximo del logo */
        height: auto; /* Mantener proporción */
        margin-bottom: 1rem;
      }
      .sidebar {
        grid-area: sidebar;
        background:rgb(43, 22, 92);
        color: white;
        padding: 1rem;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
      }
      .sidebar ul {
        list-style: none;
        padding: 0;
      }
      .sidebar li {
        margin: 0.75rem 0;
      }
      .sidebar a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        display: block;
        border-radius: 5px;
        transition: background 0.3s, transform 0.2s;
      }
      .sidebar a:hover {
        background: #6200ea;
        transform: scale(1.05);
      }
      .content {
        grid-area: content;
        padding: 2rem;
      }
      .footer {
        grid-area: footer;
        background:rgb(31, 18, 49);
        color: white;
        text-align: center;
        padding: 1rem;
      }
    `,
  ],
  imports: [RouterModule],
})
export class AppComponent {}
