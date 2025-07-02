import { Component, ElementRef, ViewChild } from '@angular/core';
import { NoCachePipe } from '@shared/pipes/no-cache.pipe';
import { environment } from '@environments/environment';
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
  imports: [NoCachePipe],
})
export class InteractiveMapComponent {
  imageSrc = 'assets/Mapa limpio.png';
  markers: Marker[] = [
    {
      x: 20,
      y: 16,
      info: '',
      characters: [ANDRES],
      badge: BADGE_5,
    },
    {
      x: 76.5,
      y: 90.5,
      info: '',
      characters: [SOF, SIL, LUIS],
      badge: BADGE_2,
    },
    {
      x: 25.5,
      y: 27,
      info: '',
      characters: [CLARA, SERGIO],
      badge: BADGE_4,
    },
    {
      x: 23.5,
      y: 32,
      info: '',
      characters: [ANDREA, JAIME, SORAYA],
      badge: BADGE_7,
    },
    {
      x: 30,
      y: 37,
      info: '',
      characters: [JUN, BAR],
    },
    {
      x: 40.5,
      y: 28,
      info: '',
      characters: [RU],
      badge: BADGE_6,
    },
    {
      x: 48,
      y: 37,
      info: '',
      characters: [IRINA_Y_DAVID],
      badge: BADGE_1,
    },
    {
      x: 77.2,
      y: 26.2,
      info: '',
      characters: [LU],
      badge: BADGE_8,
    },
    {
      x: 41.5,
      y: 42.5,
      info: '',
      characters: [NOAH],
      badge: BADGE_3,
    },
  ];
  selectedMarker?: Marker;
  @ViewChild('mapImage') mapImage?: ElementRef<HTMLDivElement>;

  get mapImageHeight() {
    return this.mapImage?.nativeElement.offsetHeight ?? 0;
  }

  selectMarker(marker: Marker) {
    this.selectedMarker = marker;
  }

  clearSelection() {
    this.selectedMarker = undefined;
  }
}
