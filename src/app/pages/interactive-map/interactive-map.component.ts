import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { NoCachePipe } from '@shared/pipes/no-cache.pipe';
import { TRAINERS, BADGES, BADGES_LIST } from '@utils/constants';
import { NgClass } from '@angular/common';
import { SoundService } from '@app/services/sound.service';
import { PaperComponent } from './components/paper/paper.component';
import {
  Badge,
  Marker,
} from '@app/pages/interactive-map/models/marker.interface';
import { Database } from '@angular/fire/database';
import { onValue, ref } from 'firebase/database';
import { Bagdes } from '@app/models/badges.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss'],
  imports: [NoCachePipe, NgClass, PaperComponent],
})
export class InteractiveMapComponent {
  imageSrc = 'assets/Mapa limpio.png';
  markers: Marker[] = [
    {
      id: '5',
      x: 20,
      y: 16,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.ANDRES],
      badge: BADGES.BADGE_5,
    },
    {
      id: '2',
      x: 76.5,
      y: 90.5,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.SOF, TRAINERS.SIL, TRAINERS.LUIS],
      badge: BADGES.BADGE_2,
    },
    {
      id: '4',
      x: 25.5,
      y: 27,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.CLARA, TRAINERS.SERGIO],
      badge: BADGES.BADGE_4,
    },
    {
      id: '7',
      x: 23.5,
      y: 32,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.ANDREA, TRAINERS.JAIME, TRAINERS.SORAYA],
      badge: BADGES.BADGE_7,
    },
    {
      id: '0',
      x: 30,
      y: 37,
      info: '',
      characters: [TRAINERS.JUN, TRAINERS.BAR],
    },
    {
      id: '3',
      x: 40.5,
      y: 28,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.RU],
      badge: BADGES.BADGE_3,
    },
    {
      id: '6',
      x: 48,
      y: 37,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.IRINA_Y_DAVID],
      badge: BADGES.BADGE_6,
    },
    {
      id: '1',
      x: 77.2,
      y: 26.2,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.LU],
      badge: BADGES.BADGE_1,
    },
    {
      id: '8',
      x: 41.5,
      y: 42.5,
      info: 'Párrafo con información de la prueba',
      characters: [TRAINERS.NOAH],
      badge: BADGES.BADGE_8,
    },
  ];
  selectedMarker?: Marker;
  @ViewChild('mapImage') mapImage?: ElementRef<HTMLDivElement>;

  soundService = inject(SoundService);

  get mapImageHeight() {
    return this.mapImage?.nativeElement.offsetHeight ?? 0;
  }

  BADGES_LIST = BADGES_LIST;

  get junBarCharacter() {
    return this.markers.find(
      (marker) =>
        marker.characters.includes(TRAINERS.JUN) &&
        marker.characters.includes(TRAINERS.BAR)
    );
  }

  db = inject(Database);
  #router = inject(Router);
  obtainedBadges: WritableSignal<Badge[]> = signal([]);
  clues: WritableSignal<string[]> = signal([]);

  get showClue(): boolean {
    return (
      this.clues().includes(this.selectedMarker?.id ?? '') ||
      this.selectedMarker?.id === '0'
    );
  }

  ngOnInit() {
    this.#refreshBadges();
    this.#refreshClues();
  }
  selectMarker(marker: Marker) {
    this.soundService.play('assets/sounds/menu.mp3');
    this.selectedMarker = marker;
  }

  clearSelection() {
    this.selectedMarker = undefined;
  }

  obtainClue() {
    this.#router.navigate(['memory-game', this.selectedMarker?.id]);
  }

  #refreshBadges() {
    const badges = ref(this.db, 'badges');
    onValue(badges, (snapshot) => {
      const data = snapshot.val();
      const badgesIds: number[] = data
        .split(',')
        .map((badge: string) => Number(badge.trim()));
      this.obtainedBadges.set([
        ...new Set(badgesIds.map((id) => BADGES_LIST[id - 1])),
      ]);
    });
  }

  #refreshClues() {
    const clues = ref(this.db, 'clues');
    onValue(clues, (snapshot) => {
      const data = snapshot.val();
      const cluesIds: string[] = data
        .split(',')
        .map((clue: string) => [new Set(...clue.trim())]);
      this.clues.set(cluesIds);
    });
  }
}
