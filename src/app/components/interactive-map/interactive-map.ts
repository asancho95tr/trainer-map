import { Component } from '@angular/core';
import { NoCachePipe } from '@shared/pipes/no-cache.pipe';
import { environment } from '@environments/environment';
import {
  ANDREA,
  ANDRES,
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
  position?: 'top' | 'bottom'; // posición del tooltip
  alignment?: 'left' | 'right' | 'center'; // alineación del tooltip
}

interface Character {
  name: string;
  image: string;
}

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
      info: 'Andrés',
      characters: [ANDRES],
    },
    {
      x: 76.5,
      y: 90.5,
      info: 'Sof y Luis',
      characters: [SOF, LUIS, SIL],
    },
    {
      x: 25.5,
      y: 28,
      info: 'Clara y Sergio',
      characters: [CLARA, SERGIO],
    },
    {
      x: 24,
      y: 31,
      info: 'Andrea y Jaime',
      characters: [ANDREA, JAIME],
    },
    {
      x: 30,
      y: 37,
      info: 'Bar y Jun',
      characters: [BAR, JUN],
    },
    {
      x: 40.5,
      y: 28,
      info: 'Ru',
      characters: [RU],
    },
    {
      x: 48,
      y: 37,
      info: 'Irina y David',
      characters: [IRINA_Y_DAVID],
    },
    {
      x: 77.2,
      y: 26.2,
      info: 'Lu',
      characters: [LU],
    },
    {
      x: 41.5,
      y: 42.5,
      info: 'Noah',
      characters: [NOAH],
    },
    {
      x: 46,
      y: 70,
      info: 'Soraya',
      characters: [SORAYA],
    },
  ];
  selectedMarker?: Marker;
  showGrid = false;

  get isPro() {
    return environment.production;
  }

  toggleGrid() {
    this.showGrid = !this.showGrid;
  }

  selectMarker(marker: Marker) {
    this.selectedMarker = marker;
  }

  clearSelection() {
    this.selectedMarker = undefined;
  }
}
