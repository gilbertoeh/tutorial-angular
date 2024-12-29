import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: 'que-es-angular', pathMatch: 'full' },
  { path: 'que-es-angular', loadComponent: () => import('./pages/que-es-angular/que-es-angular.component').then(m => m.QueEsAngularComponent) },
  { path: 'justificacion', loadComponent: () => import('./pages/justificacion/justificacion.component').then(m => m.JustificacionComponent) },
  { path: 'instalacion', loadComponent: () => import('./pages/instalacion/instalacion.component').then(m => m.InstalacionComponent) },
  { path: 'primeros-pasos', loadComponent: () => import('./pages/primeros-pasos/primeros-pasos.component').then(m => m.PrimerosPasosComponent) },
  { path: 'utilizacion', loadComponent: () => import('./pages/utilizacion/utilizacion.component').then(m => m.UtilizacionComponent) },
  { path: 'funcionamiento', loadComponent: () => import('./pages/funcionamiento/funcionamiento.component').then(m => m.FuncionamientoComponent) },
  { path: 'conclusiones', loadComponent: () => import('./pages/conclusiones/conclusiones.component').then(m => m.ConclusionesComponent) },
  { path: 'recomendaciones', loadComponent: () => import('./pages/recomendaciones/recomendaciones.component').then(m => m.RecomendacionesComponent) },
  { path: 'problemas-comunes', loadComponent: () => import('./pages/problemas-comunes/problemas-comunes.component').then(m => m.ProblemasComunesComponent) },
  { path: 'recursos', loadComponent: () => import('./pages/recursos/recursos.component').then(m => m.RecursosComponent) },
];

