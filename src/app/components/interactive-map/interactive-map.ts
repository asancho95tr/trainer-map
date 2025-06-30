import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgClass } from '@angular/common';

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
})
export class InteractiveMapComponent {
  imageSrc = 'assets/Mapa limpio.png';
  markers: Marker[] = [
    {
      x: 20,
      y: 16,
      info: 'Andrés',
      characters: [{ name: 'Andrés', image: 'assets/Andrés.png' }],
    },
    {
      x: 76.5,
      y: 90.5,
      info: 'Sof y Luis',
      characters: [
        { name: 'Sof', image: 'assets/Sof.png' },
        { name: 'Luis', image: 'assets/Luis.png' },
        { name: 'Silvia', image: 'assets/Silvia.png' },
      ],
    },
    {
      x: 25.5,
      y: 28,
      info: 'Clara y Sergio',
      characters: [
        { name: 'Clara', image: 'assets/Clara.png' },
        { name: 'Sergio', image: 'assets/Sergio.png' },
      ],
    },
    {
      x: 24,
      y: 31,
      info: 'Andrea y Jaime',
      characters: [
        { name: 'Andrea', image: 'assets/Andrea.png' },
        { name: 'Jaime', image: 'assets/Jaime.png' },
      ],
    },
    {
      x: 30,
      y: 37,
      info: 'Bar y Jun',
      characters: [
        { name: 'Bar', image: 'assets/Bar.png' },
        { name: 'Jun', image: 'assets/Jun.png' },
      ],
    },
    {
      x: 40.5,
      y: 28,
      info: 'Ru',
      characters: [{ name: 'Ru', image: 'assets/Ru.png' }],
    },
    {
      x: 48,
      y: 37,
      info: 'Irina y David',
      characters: [
        { name: 'Irina y David', image: 'assets/Irina y David.png' },
      ],
    },
    {
      x: 77.2,
      y: 26.2,
      info: 'Lu',
      characters: [{ name: 'Lu', image: 'assets/Lu.png' }],
    },
    {
      x: 41.5,
      y: 42.5,
      info: 'Noah',
      characters: [{ name: 'Noah', image: 'assets/Noah.png' }],
    },
    {
      x: 46,
      y: 70,
      info: 'Soraya',
      characters: [{ name: 'Soraya', image: 'assets/Soraya.png' }],
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
