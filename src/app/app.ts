import { Component } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-4">
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [RouterModule, AngularFireDatabaseModule],
})
export class AppComponent {}
