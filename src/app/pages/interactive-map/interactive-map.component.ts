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
import { SoundService } from '@app/shared/services/sound.service';
import { PaperComponent } from './components/paper/paper.component';
import {
  Badge,
  Marker,
} from '@app/pages/interactive-map/models/marker.interface';
import { Database } from '@angular/fire/database';
import { onValue, ref } from 'firebase/database';
import { Bagdes } from '@app/models/badges.enum';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { ThemeToggleComponent } from '@app/shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss'],
  imports: [NoCachePipe, NgClass, PaperComponent, ThemeToggleComponent],
})
export class InteractiveMapComponent {
  get imageSrc() {
    return `assets/map-${environment.theme}.png`;
  }
  markers: Marker[] = [
    {
      id: '5',
      x: 20,
      y: 16,//Combate pokémon
      info: 'En Paldea aprendí que no basta con tener criaturas fuertes, hay que tener estrategia. ¿Te atreves a medirte conmigo en un verdadero combate Pokémon?',//Combate pokémon
      characters: [TRAINERS.ANDRES],
      badge: BADGES.BADGE_5,
      color: 'pink'
    },
    {
      id: '2',
      x: 76.5,
      y: 90.5,//Componer y cantar una canción a lo HSM
      info: 'En este gimnasio no basta con fuerza ni estrategia… aquí el corazón marca el ritmo. Si puedes cantar lo que sientes y hacerlo brillar como en un musical, quizá estés listo para continuar.',
      characters: [TRAINERS.SOF, TRAINERS.SIL, TRAINERS.LUIS],
      badge: BADGES.BADGE_2,
      color: 'aqua'
    },
    {
      id: '7',
      x: 25.5,
      y: 27,//Foto a redes que llegue a X likes
      info: 'El eco de tu triunfo no siempre se escucha en el estadio… a veces se mide en aplausos invisibles. Haz que tu imagen conquiste a la multitud.',
      characters: [TRAINERS.ANDREA, TRAINERS.JAIME, TRAINERS.SORAYA],
      badge: BADGES.BADGE_7,
      color: 'red'
    },
    {
      id: '4',
      x: 23.5,
      y: 32,//Salir a tomar café en pijama
      info: 'Los verdaderos entrenadores no temen al qué dirán. A veces, el valor se demuestra saliendo al mundo tal y como eres… incluso antes de cambiarte de ropa.',
      characters: [TRAINERS.CLARA, TRAINERS.SERGIO],
      badge: BADGES.BADGE_4,
      color: 'green'
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
      y: 28,//Baby shark con la guitarra
      // info: 'La melodía de la victoria no siempre es heróica. Incluso un canto infantil puede rugir como un trueno si lo tocas con cuerdas de acero.',
      info: 'Bienvenidos al gimnasio Aguilar. Todas las salidas están selladas y solo tocar la canción mágica disipará la maldición y evitará que seais devorados por los temibles tiburones de la estanca.',
      characters: [TRAINERS.RU],
      badge: BADGES.BADGE_3,
      color: 'yellow'
    },
    {
      id: '6',
      x: 48,
      y: 37,
      info: 'Algunos desafíos no se superan con fuerza, sino recordando cómo era jugar sin preocuparse por nada. Volver a correr, subir y deslizarse como cuando todo era más simple puede ser la clave para seguir avanzando.',
      characters: [TRAINERS.IRINA_Y_DAVID],
      badge: BADGES.BADGE_6,
      color: 'black'
    },
    {
      id: '1',
      x: 77.2,
      y: 26.2,//Trivial de geología
      info: 'El mundo se construyó capa a capa, y solo quienes conocen su historia pueden avanzar. ¿Sabrás distinguir lo que es roca sólida de lo que se desmorona al primer temblor?',
      characters: [TRAINERS.LU],
      badge: BADGES.BADGE_1,
      color: 'brown'
    },
    {
      id: '8',
      x: 41.5,
      y: 42.5,
      info: 'Dicen que para alcanzar la gloria basta con dar en el blanco, no siempre en el corazón. Apunta firme… aunque no seas Robin Hood.',//Tiro con arco
      characters: [TRAINERS.NOAH],
      badge: BADGES.BADGE_8,//Tiro con arco
      color: 'purple'
    },
  ].map((marker) => { 
    if(environment.theme === 'default') {
      return {
        ...marker,
        x: marker.x + 1,
        y: marker.y - 3
      }
    }
    return {
      ...marker
    }
});
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
        .map((clue: string) => clue.trim());
      this.clues.set([
        ...new Set(cluesIds)
      ]);
    });
  }
}
