import { Component, inject, signal } from "@angular/core";
import { SoundService } from "@app/shared/services/sound.service";
import { environment } from "@environments/environment";

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
    isDark = signal(environment.theme === 'dark');
    isSpinning = false;
    soundService = inject(SoundService);

    toggleTheme() {
        if (this.isSpinning) return;
        this.soundService.play('assets/sounds/menu.mp3');
        this.isSpinning = true;
    }

    onAnimationEnd() {
        this.isDark.update(v => !v);
        environment.theme = this.isDark() ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', this.isDark());
        this.isSpinning = false;
    }
}