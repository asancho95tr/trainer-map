// sound.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private audioCache = new Map<string, HTMLAudioElement>();

  play(src: string) {
    if (!this.audioCache.has(src)) {
      const audio = new Audio(src);
      this.audioCache.set(src, audio);
    }
    const audio = this.audioCache.get(src)!;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      // a veces bloqueado por navegador si no hubo interacción
      console.warn('Audio no reproducido:', err);
    });
  }
}
