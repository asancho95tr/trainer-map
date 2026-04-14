import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TarotCard } from '../../models/tarot-card.interface';

@Component({
  selector: 'app-tarot-card',
  imports: [],
  templateUrl: './tarot-card.component.html',
  styleUrl: './tarot-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarotCardComponent {
  card = input.required<TarotCard & { reversed?: boolean }>();
}
