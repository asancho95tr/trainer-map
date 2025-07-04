import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TRAINERS } from '@app/utils/constants';

type Card = {
  id: number;
  name: string;
  image: string;
  matched: boolean;
  flipped: boolean;
};

@Component({
  standalone: true,
  selector: 'app-memory-game',
  imports: [CommonModule],
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  marcadorId = this.route.snapshot.paramMap.get('id')!;
  difficulty = signal<number>(1); // Puedes cargarla desde Firebase si prefieres
  round = signal<number>(0);
  successStreak = signal<number>(0);

  availableCharacters = [
    TRAINERS.ANDRES,
    TRAINERS.SOF,
    TRAINERS.SIL,
    TRAINERS.LUIS,
    TRAINERS.CLARA,
    TRAINERS.SERGIO,
    TRAINERS.ANDREA,
    TRAINERS.JAIME,
    TRAINERS.BAR,
    TRAINERS.JUN,
    TRAINERS.RU,
    TRAINERS.LU,
    TRAINERS.NOAH,
    TRAINERS.SORAYA,
    TRAINERS.IRINA_Y_DAVID,
  ];

  cards = signal<Card[]>([]);
  selected = signal<Card[]>([]);
  canFlip = signal(true);

  ngOnInit() {
    this.startRound();
  }

  startRound() {
    const numPairs = 2 + this.difficulty() * 2; // aumenta con dificultad
    const chosen = this.shuffle([...this.availableCharacters]).slice(
      0,
      numPairs
    );

    const newDeck = this.shuffle(
      chosen
        .map((char, index) => [
          { id: index * 2, ...char, matched: false, flipped: false },
          { id: index * 2 + 1, ...char, matched: false, flipped: false },
        ])
        .flat()
    );

    this.cards.set(newDeck);
    this.selected.set([]);
    this.round.update((r) => r + 1);
  }

  flipCard(card: Card) {
    if (!this.canFlip() || card.flipped || card.matched) return;

    card.flipped = true;
    const current = [...this.selected(), card];
    this.selected.set(current);

    if (current.length === 2) {
      this.canFlip.set(false);
      setTimeout(() => {
        const [first, second] = current;
        if (first.name === second.name) {
          first.matched = true;
          second.matched = true;
        } else {
          first.flipped = false;
          second.flipped = false;
        }

        this.selected.set([]);
        this.canFlip.set(true);

        if (this.cards().every((c) => c.matched)) {
          this.successStreak.update((s) => s + 1);
          if (this.successStreak() === 3) {
            // 🔥 Ronda completada -> volver a marcador
            // Aquí puedes hacer una llamada a Firebase si quieres
            this.router.navigate(['', this.marcadorId], {
              queryParams: { pistaDesbloqueada: 'true' },
            });
          } else {
            this.startRound(); // siguiente ronda
          }
        }
      }, 800);
    }
  }

  private shuffle<T>(array: T[]): T[] {
    return array
      .map((v) => [Math.random(), v] as [number, T])
      .sort(([a], [b]) => a - b)
      .map(([, v]) => v);
  }
}
