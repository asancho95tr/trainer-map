import { Component, inject, signal } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { ApiService } from './services/api.service';
import { signInWithPopup } from 'firebase/auth';
import { MapComponent } from './components/map/map';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="p-4">
      @if(loggedIn()) {
      <app-map />
      }
    </div>
  `,
  imports: [MapComponent],
})
export class AppComponent {
  private auth = inject(Auth);
  private api = inject(ApiService);

  loggedIn = signal(false);

  ngOnInit() {
    this.loginWithGoogle();
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.loggedIn.set(true);
    } catch (error: any) {
      this.loggedIn.set(false);
      console.error('Error al iniciar sesión con Google:', error);
    }
  }
  async callApi() {
    try {
      const res: any = await this.api.getProtectedData();
    } catch (err: any) {
      console.log(err.error || 'Error al llamar API');
    }
  }
}
