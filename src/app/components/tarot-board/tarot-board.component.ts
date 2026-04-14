import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { TarotService } from '../../services/tarot.service';
import { TarotCard } from '../../models/tarot-card.interface';
import { TarotCardComponent } from '../tarot-card/tarot-card.component';

@Component({
  selector: 'app-tarot-board',
  imports: [TarotCardComponent],
  templateUrl: './tarot-board.component.html',
  styleUrls: ['./tarot-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarotBoardComponent {

  cards = signal<(TarotCard)[]>([]);
  interpretation = computed(() =>this.cards().map(c => (`<strong>${c.name}:</strong> ${c.reversed ? c.reversed_text : c.text}`)).join('<br/>'));

  constructor(private tarotService: TarotService) { }

  draw() {
    this.cards.set(this.tarotService.drawCards(3)); // tirada de 3 cartas
  }
}