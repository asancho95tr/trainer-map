import { Component } from '@angular/core';
import { InteractiveMapComponent } from './components/interactive-map/interactive-map';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-4">
      <app-interactive-map />
    </div>
  `,
  imports: [InteractiveMapComponent],
})
export class AppComponent {}
