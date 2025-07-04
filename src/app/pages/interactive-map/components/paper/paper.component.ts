import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { SoundService } from '@app/services/sound.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
  standalone: true,
})
export class PaperComponent {
  @Input() playerName = 'ASH';
  date = new Date().toLocaleDateString();

  @ViewChild('diplomaRef', { static: false }) diplomaRef!: ElementRef;
  soundService = inject(SoundService);

  async downloadDiploma() {
    this.soundService.play('assets/sounds/menu.mp3');
    const canvas = await html2canvas(this.diplomaRef.nativeElement, {
      scale: 3,
      useCORS: true,
    });
    const link = document.createElement('a');
    link.download = `Diploma_${this.playerName}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }
}
