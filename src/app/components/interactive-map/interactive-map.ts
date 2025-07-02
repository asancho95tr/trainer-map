import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NoCachePipe } from '@shared/pipes/no-cache.pipe';
import {
  ANDREA,
  ANDRES,
  BADGE_1,
  BADGE_2,
  BADGE_3,
  BADGE_4,
  BADGE_5,
  BADGE_6,
  BADGE_7,
  BADGE_8,
  BADGES,
  BAR,
  CLARA,
  IRINA_Y_DAVID,
  JAIME,
  JUN,
  LU,
  LUIS,
  NOAH,
  RU,
  SERGIO,
  SIL,
  SOF,
  SORAYA,
} from '@utils/constants';
import { NgClass } from '@angular/common';
import { SoundService } from '@app/services/sound.service';
import { PaperComponent } from '../paper/paper.component';

interface Marker {
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  info: string;
  characters: Character[];
  badge?: Badge; // medalla asociada
  obtainedBadges?: Badge[]; // medallas obtenidas
  position?: 'top' | 'bottom'; // posición del tooltip
  alignment?: 'left' | 'right' | 'center'; // alineación del tooltip
}

interface Character {
  name: string;
  image: string;
}

type Badge = Character;

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.html',
  styleUrls: ['./interactive-map.scss'],
  imports: [NoCachePipe, NgClass, PaperComponent],
})
export class InteractiveMapComponent {
  imageSrc = 'assets/Mapa limpio.png';
  markers: Marker[] = [
    {
      x: 20,
      y: 16,
      info: 'Párrafo con información de la prueba',
      characters: [ANDRES],
      badge: BADGE_5,
    },
    {
      x: 76.5,
      y: 90.5,
      info: 'Párrafo con información de la prueba',
      characters: [SOF, SIL, LUIS],
      badge: BADGE_2,
    },
    {
      x: 25.5,
      y: 27,
      info: 'Párrafo con información de la prueba',
      characters: [CLARA, SERGIO],
      badge: BADGE_4,
    },
    {
      x: 23.5,
      y: 32,
      info: 'Párrafo con información de la prueba',
      characters: [ANDREA, JAIME, SORAYA],
      badge: BADGE_7,
    },
    {
      x: 30,
      y: 37,
      info: '',
      characters: [JUN, BAR],
      obtainedBadges: [],
    },
    {
      x: 40.5,
      y: 28,
      info: 'Párrafo con información de la prueba',
      characters: [RU],
      badge: BADGE_3,
    },
    {
      x: 48,
      y: 37,
      info: 'Párrafo con información de la prueba',
      characters: [IRINA_Y_DAVID],
      badge: BADGE_6,
    },
    {
      x: 77.2,
      y: 26.2,
      info: 'Párrafo con información de la prueba',
      characters: [LU],
      badge: BADGE_1,
    },
    {
      x: 41.5,
      y: 42.5,
      info: 'Párrafo con información de la prueba',
      characters: [NOAH],
      badge: BADGE_8,
    },
  ];
  selectedMarker?: Marker;
  @ViewChild('mapImage') mapImage?: ElementRef<HTMLDivElement>;

  soundService = inject(SoundService);

  get mapImageHeight() {
    return this.mapImage?.nativeElement.offsetHeight ?? 0;
  }

  BADGES = BADGES;

  get junBarCharacter() {
    return this.markers.find(
      (marker) =>
        marker.characters.includes(JUN) && marker.characters.includes(BAR)
    );
  }

  selectMarker(marker: Marker) {
    this.soundService.play('assets/sounds/menu.mp3');
    this.selectedMarker = marker;
  }

  clearSelection() {
    this.selectedMarker = undefined;
  }
}
