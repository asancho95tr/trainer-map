import { Component } from '@angular/core';

interface Marker {
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  info: string;
}

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.html',
  styleUrls: ['./interactive-map.scss'],
})
export class InteractiveMapComponent {
  imageSrc = 'assets/Mapa limpio.png';
  markers: Marker[] = [
    { x: 20, y: 16, info: 'Andrés' },
    { x: 76.5, y: 90.5, info: 'Sof y Luis' },
    { x: 25, y: 29, info: 'Clara y Sergio' },
    { x: 24, y: 31, info: 'Andrea y Jaime' },
    { x: 30, y: 37, info: 'Bar y Jun' },
  ];
  selectedMarker?: Marker;
  showGrid = true;

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
