import { Component, inject, signal, WritableSignal } from '@angular/core';
import { InteractiveMapComponent } from './components/interactive-map/interactive-map.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-4">
      <app-interactive-map />
    </div>
  `,
  imports: [InteractiveMapComponent, AngularFireDatabaseModule],
})
export class AppComponent {}
