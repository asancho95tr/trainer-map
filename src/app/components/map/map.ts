import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `<div id="map" style="height: 100vh;"></div>`,
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  southWest = L.latLng(41.8, -1.57); // límite inferior izquierdo
  northEast = L.latLng(41.86, -1.5); // límite superior derecho
  bounds = L.latLngBounds(this.southWest, this.northEast);

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const southWest = L.latLng(41.8, -1.57);
    const northEast = L.latLng(41.86, -1.5);
    const bounds = L.latLngBounds(southWest, northEast);

    const zoom = 17.5;
    this.map = L.map('map', {
      maxBounds: bounds, // limita el área navegable
      maxBoundsViscosity: 0, // bloquea el movimiento fuera del área
      minZoom: zoom,
      maxZoom: zoom,
    }).setView([41.8333, -1.5333], zoom); // centro de Borja

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; CartoDB',
      }
    ).addTo(this.map);
    // L.marker([41.8333, -1.5333])
    //   .addTo(this.map)
    //   .bindPopup('Borja, CP 50540')
    //   .openPopup();
  }
}
