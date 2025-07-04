import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/interactive-map/interactive-map.component').then(
        (m) => m.InteractiveMapComponent
      ),
  },
  {
    path: 'memory-game/:id',
    loadComponent: () =>
      import('./pages/memory-game/memory-game.component').then(
        (m) => m.MemoryGameComponent
      ),
  },
];
