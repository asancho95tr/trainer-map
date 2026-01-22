import { Component, inject, signal } from "@angular/core";
import { SoundService } from "@app/shared/services/sound.service";
import { environment } from "@environments/environment";

type ThemeState = 'default' | 'light' | 'dark';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
    theme = signal<ThemeState>(
        environment.theme === 'dark' ? 'dark' : environment.theme === 'light' ? 'light' : 'default'
    );
    isSpinning = false;
    soundService = inject(SoundService);

    toggleTheme() {
        if (this.isSpinning) return;
        this.soundService.play('assets/sounds/menu.mp3');
        this.isSpinning = true;
    }

    onAnimationEnd() {
        const current = this.theme();
        const next: ThemeState = current === 'default' ? 'light' : current === 'light' ? 'dark' : 'default';
        this.theme.set(next);
        environment.theme = next; // keep the value for other parts of the app if needed
        document.body.classList.toggle('dark-theme', next === 'dark');
        this.isSpinning = false;
    }
}