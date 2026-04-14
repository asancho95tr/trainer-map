import { Component, input, ChangeDetectionStrategy, computed } from '@angular/core';
import { Card, TarotCard } from '../../models/tarot-card.interface';

@Component({
  selector: 'app-tarot-card',
  imports: [],
  templateUrl: './tarot-card.component.html',
  styleUrl: './tarot-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarotCardComponent {
  card = input.required<Card>();
  mayorCard = computed(() => this.card() as TarotCard);
}
